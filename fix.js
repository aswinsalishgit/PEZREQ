const fs = require('fs');
const path = 'src/data/products.ts';
let content = fs.readFileSync(path, 'utf8');

const uniqueImages = [
  'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1614179924047-e1ab49a0a0cf?q=80&w=1000&auto=format&fit=crop'
];

let productIndex = 0;

// Match the entire images array and the hoverImage property
content = content.replace(/images:\s*\[[\s\S]*?\],[\s\S]*?hoverImage:\s*\"[^\"]*\"/g, () => {
  const img = uniqueImages[productIndex % uniqueImages.length];
  productIndex++;
  return `images: ["${img}"],\n    hoverImage: "${img}"`;
});

fs.writeFileSync(path, content);
console.log('Updated ' + productIndex + ' products.');
