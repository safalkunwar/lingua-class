const fs = require('fs');
const path = 'C:/Users/Acer/Downloads/lingua-class-main/lingua-class-main/data/english-survival-library.ts';
const content = fs.readFileSync(path, 'utf8');
const matches = content.match(/id:\s*"([^"]+)"/g) || [];
const ids = matches.map(m => m.match(/"([^"]+)"/)[1]);
const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
console.log('Total IDs:', ids.length);
console.log('Duplicates:', dupes.length ? dupes : 'None');
