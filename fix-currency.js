const fs = require('fs');
let code = fs.readFileSync('src/data/products.ts', 'utf8');
code = code.replace(/currency: "USD"/g, 'currency: "INR"');
code = code.replace(/price: (\d+),/g, (match, p1) => `price: ${parseInt(p1) * 83},`);
fs.writeFileSync('src/data/products.ts', code);
console.log('Done');
