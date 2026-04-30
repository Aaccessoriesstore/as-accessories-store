import { readFileSync, writeFileSync, mkdirSync } from 'fs';

// Read the source file
const src = readFileSync('src/index.tsx', 'utf-8');

// Find getStorePage function - extract everything between first ` after return and matching `
function extractTemplateLiteral(src, funcName) {
  const funcIdx = src.indexOf(`function ${funcName}()`);
  if (funcIdx === -1) throw new Error(`Function ${funcName} not found`);
  
  // Find 'return `' after the function declaration
  const returnIdx = src.indexOf('return `', funcIdx);
  if (returnIdx === -1) throw new Error(`No return \` found in ${funcName}`);
  
  const start = returnIdx + 'return `'.length;
  
  // Now find the LAST backtick that closes this template literal
  // We need to scan and handle nested ${...} expressions
  let depth = 0; // depth of ${ nesting
  let i = start;
  
  while (i < src.length) {
    if (src[i] === '\\') {
      i += 2; // skip escaped char
      continue;
    }
    if (src[i] === '$' && src[i+1] === '{') {
      depth++;
      i += 2;
      continue;
    }
    if (depth > 0 && src[i] === '}') {
      depth--;
      i++;
      continue;
    }
    if (depth === 0 && src[i] === '`') {
      // This is the closing backtick
      break;
    }
    i++;
  }
  
  const raw = src.slice(start, i);
  
  // Unescape: \` -> ` and \${...} patterns remain as dynamic JS
  // But we want to keep JS expressions as-is (they'll be in <script> tags)
  // Just unescape \` to `
  return raw
    .replace(/\\`/g, '`')
    .replace(/\\\$/g, '$');
}

try {
  const storeHTML = extractTemplateLiteral(src, 'getStorePage');
  const adminHTML = extractTemplateLiteral(src, 'getAdminPage');
  
  mkdirSync('public', { recursive: true });
  writeFileSync('public/index.html', storeHTML);
  writeFileSync('public/admin.html', adminHTML);
  
  console.log(`✅ index.html: ${storeHTML.length} bytes`);
  console.log(`✅ admin.html: ${adminHTML.length} bytes`);
  
  // Quick validation
  if (!storeHTML.includes('</html>')) console.warn('⚠️ index.html may be incomplete');
  if (!adminHTML.includes('</html>')) console.warn('⚠️ admin.html may be incomplete');
  if (!storeHTML.includes('whatsapp_number')) console.warn('⚠️ whatsapp_number not found in store');
  if (!adminHTML.includes('Ahmed.2026')) console.warn('⚠️ password not found in admin');
  
} catch(e) {
  console.error('ERROR:', e.message);
  process.exit(1);
}
