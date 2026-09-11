import re

file_path = r'C:\Users\Acer\Downloads\lingua-class-main\lingua-class-main\data\english-survival-library.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

resource_positions = [(m.start(), m.group(1)) for m in re.finditer(r'id: "([^"]+)"', content)]

chunk_matches = list(re.finditer(r'chunk: "example chunk', content))
mini_matches = list(re.finditer(r'question: "(?:Practice question|练习问题)', content))

def find_nearest_resource(matches):
    affected = set()
    for match in matches:
        for pos, rid in reversed(resource_positions):
            if pos < match.start():
                affected.add(rid)
                break
    return sorted(affected)

affected_chunks = find_nearest_resource(chunk_matches)
affected_mini = find_nearest_resource(mini_matches)
all_affected = sorted(set(affected_chunks + affected_mini))

print('Resources with removed chunk placeholders:')
for r in affected_chunks:
    print(f'  - {r}')
print(f'Total: {len(affected_chunks)}')

print('Resources with removed miniDrill placeholders:')
for r in affected_mini:
    print(f'  - {r}')
print(f'Total: {len(affected_mini)}')

print('All affected resources:')
for r in all_affected:
    print(f'  - {r}')
print(f'Total unique resources: {len(all_affected)}')
