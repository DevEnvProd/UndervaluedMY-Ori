const fs = require('fs');

const dataPath = 'src/data/mockData.ts';
let code = fs.readFileSync(dataPath, 'utf8');

// Insert import at the top
code = "import { winboxArticles } from './winboxArticles';\n" + code;

// Find the end of the articles array
const match = code.match(/\];\n\nexport const portfolio/);
if (match) {
  code = code.replace(/\];\n\nexport const portfolio/, ', ...winboxArticles];\n\nexport const portfolio');
  fs.writeFileSync(dataPath, code);
  console.log("mockData.ts patched.");
} else {
  console.log("Could not find the end of articles array.");
}
