const fs = require('fs');

const file = 'src/data/navigationContent.ts';
let content = fs.readFileSync(file, 'utf8');

// Find the start of smNavItems
const startIndex = content.indexOf('export const smNavItems = [');
if (startIndex === -1) {
    console.error('Could not find smNavItems');
    process.exit(1);
}

const beforeSmNavItems = content.slice(0, startIndex);
let arrayStr = content.slice(startIndex + 'export const smNavItems = '.length);
// arrayStr is essentially the array [...]

// Evaluate it safely to reorder
// We can use new Function or eval because it's trusted local code
// But since there are no variables referenced, we can eval it
let smNavItems;
try {
    smNavItems = eval(arrayStr);
} catch (e) {
    console.error('Failed to parse array:', e);
    process.exit(1);
}

// Desired order: Home, Outcomes, Crypto, Offerings, Industries, Solutions, Capabilities, Partners, Company
const order = ['Home', 'Outcomes', 'Crypto', 'Offerings', 'Industries', 'Solutions', 'Capabilities', 'Partners', 'Company'];

smNavItems.sort((a, b) => {
    const idxA = order.indexOf(a.name);
    const idxB = order.indexOf(b.name);
    if (idxA === -1 && idxB === -1) return 0;
    if (idxA === -1) return 1;
    if (idxB === -1) return -1;
    return idxA - idxB;
});

// Re-stringify the array
const newArrayStr = JSON.stringify(smNavItems, null, 4);

// The original file ended with a semicolon after the array.
const newContent = beforeSmNavItems + 'export const smNavItems = ' + newArrayStr + ';\n';

fs.writeFileSync(file, newContent, 'utf8');
console.log('Reordered smNavItems');
