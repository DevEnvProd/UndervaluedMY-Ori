const fs = require('fs');
const file = 'src/data/winboxArticles.ts';
let code = fs.readFileSync(file, 'utf8');

code = code.replace(/<a href="([^"]+)">/g, '<a href="$1" class="text-teal hover:underline font-bold">');

fs.writeFileSync(file, code);
console.log("Fixed link classes");
