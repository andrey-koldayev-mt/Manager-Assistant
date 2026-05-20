const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

const zip = new AdmZip();

const EXCLUDE_DIRS = new Set([
  'node_modules',
  '.git',
  '.angular',
  'dist'
]);

const EXCLUDE_FILES = new Set([
  'app.zip',
  'archive.js',
  'package-lock.json' // exclude package-lock to keep upload payload small
]);

function addDirectory(localPath, zipPath = '') {
  const items = fs.readdirSync(localPath);

  for (const item of items) {
    const fullPath = path.join(localPath, item);
    const relativeZipPath = zipPath ? path.join(zipPath, item) : item;
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      if (EXCLUDE_DIRS.has(item)) {
        continue;
      }
      addDirectory(fullPath, relativeZipPath);
    } else if (stat.isFile()) {
      if (EXCLUDE_FILES.has(item)) {
        continue;
      }
      const data = fs.readFileSync(fullPath);
      zip.addFile(relativeZipPath.replace(/\\/g, '/'), data);
    }
  }
}

console.log('Archiving project files...');
addDirectory(__dirname);
zip.writeZip(path.join(__dirname, 'app.zip'));
console.log('Archive app.zip created successfully!');
