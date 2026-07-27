const fs = require('fs');

const dataPath = 'src/data/mockData.ts';
let code = fs.readFileSync(dataPath, 'utf8');

// Replace the entire articles array
code = code.replace(/export const articles: Article\[\] = \[[\s\S]*?\];/m, 'export const articles: Article[] = [...winboxArticles];');

fs.writeFileSync(dataPath, code);
console.log("mockData.ts rewritten to only include winboxArticles.");
