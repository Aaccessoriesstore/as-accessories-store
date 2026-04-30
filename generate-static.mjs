// Script to extract HTML from index.tsx and generate static HTML files
import { readFileSync, writeFileSync, mkdirSync } from 'fs';

const src = readFileSync('src/index.tsx', 'utf-8');

// Extract getStorePage function content (the template literal)
const storeMatch = src.match(/function getStorePage\(\) \{\s*return `([\s\S]*?)`;\s*\}/);
// Extract getAdminPage function content (the template literal)  
const adminMatch = src.match(/function getAdminPage\(\) \{\s*return `([\s\S]*?)`;\s*\}/);

if (!storeMatch) { console.error('Could not find getStorePage'); process.exit(1); }
if (!adminMatch) { console.error('Could not find getAdminPage'); process.exit(1); }

// Unescape template literal escapes
function unescape(str) {
  return str
    .replace(/\\`/g, '`')
    .replace(/\\\$/g, '$')
    .replace(/\\\\/g, '\\');
}

const storeHTML = unescape(storeMatch[1]);
const adminHTML = unescape(adminMatch[1]);

// Write to public folder
mkdirSync('public', { recursive: true });
writeFileSync('public/index.html', storeHTML);
writeFileSync('public/admin.html', adminHTML);

console.log('✅ Generated index.html (' + storeHTML.length + ' bytes)');
console.log('✅ Generated admin.html (' + adminHTML.length + ' bytes)');
