import re

file_path = r'C:\Users\Acer\Downloads\lingua-class-main\lingua-class-main\data\english-survival-library.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

result = []
in_target_array = False
target_array_brace_depth = 0
brace_depth = 0
removed_chunks = 0
removed_mini_drills = 0

i = 0
while i < len(lines):
    line = lines[i]
    stripped = line.strip()
    
    brace_depth += line.count('{') - line.count('}')
    
    if not in_target_array:
        if 'chunks: [' in line:
            in_target_array = True
            target_array_brace_depth = brace_depth
            result.append(line)
            i += 1
            continue
        elif 'miniDrills: [' in line:
            in_target_array = True
            target_array_brace_depth = brace_depth
            result.append(line)
            i += 1
            continue
    
    if in_target_array and brace_depth < target_array_brace_depth:
        in_target_array = False
        result.append(line)
        i += 1
        continue
    
    if in_target_array:
        if stripped.startswith('{'):
            open_braces = line.count('{')
            close_braces = line.count('}')
            entry_brace_depth = open_braces - close_braces
            
            entry_lines = [line]
            j = i + 1
            current_depth = entry_brace_depth
            
            while j < len(lines) and current_depth > 0:
                entry_lines.append(lines[j])
                current_depth += lines[j].count('{') - lines[j].count('}')
                j += 1
            
            full_entry = ''.join(entry_lines)
            
            is_chunk = 'chunk:' in full_entry
            is_mini_drill = 'question:' in full_entry and any(x in full_entry for x in ['choose', 'fill-blank', 'match', 'speak'])
            
            is_placeholder = False
            
            if is_chunk:
                if 'chunk: "example chunk' in full_entry:
                    is_placeholder = True
                elif re.search(r'meaning: "意思 \d+"', full_entry):
                    is_placeholder = True
                elif re.search(r'example: "Example sentence \d+\.', full_entry):
                    is_placeholder = True
            elif is_mini_drill:
                if re.search(r'question: "(Practice question \d+|练习问题 \d+)"', full_entry):
                    is_placeholder = True
            
            if is_placeholder:
                if is_chunk:
                    removed_chunks += 1
                else:
                    removed_mini_drills += 1
            else:
                result.extend(entry_lines)
            
            i = j
            continue
    
    result.append(line)
    i += 1

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(result)

print(f'Removed {removed_chunks} chunk placeholders')
print(f'Removed {removed_mini_drills} miniDrill placeholders')
