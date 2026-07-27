const fs = require('fs');

const file = 'src/data/winboxArticles.ts';
let code = fs.readFileSync(file, 'utf8');

// The content was generated like: `<p>${intro}</p><br/><p>${body}</p><br/><p>${outro}</p>`
// I will replace `<p>` and `</p><br/>` and `</p>` to `\n\n` or similar.

code = code.replace(/<p>/g, '');
code = code.replace(/<\/p><br\/>/g, '\\n\\n');
code = code.replace(/<\/p>/g, '');

fs.writeFileSync(file, code);
console.log("Fixed content formatting");
