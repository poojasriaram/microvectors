const fs = require('fs');
if (fs.existsSync('public')) {
  fs.rmSync('public', { recursive: true, force: true });
}
fs.renameSync('dist', 'public');
