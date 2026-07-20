const fs = require('fs');
let c = fs.readFileSync('src/app/components/Navigation.tsx', 'utf8');
c = c.replace(/<\/div>\s*<\/div>\s*<\/div>\s*<div className="bg-slate-50\/80/m, '</div>\\n</div>\\n<div className="bg-slate-50/80');
fs.writeFileSync('src/app/components/Navigation.tsx', c);
