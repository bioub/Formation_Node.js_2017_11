const fs = require('fs');
const path = require('path');

const dirPath = path.resolve(__dirname, 'logs');
const filePath = path.resolve(dirPath, 'app.log');

function log(filePath, msg) {
  const line = `[${(new Date()).toISOString()}] ${msg}\n`
  fs.appendFileSync(filePath, line);
}

console.time('Total');
console.time('Thread Indispo');
try {
  try {
    const stats = fs.statSync(dirPath);
  }
  catch (err) {
    if (err.code === 'ENOENT') {
      fs.mkdirSync(dirPath);
    }
  }

  log(filePath, 'Ligne 1');
  log(filePath, 'Ligne 2');
  log(filePath, 'Ligne 3');
  log(filePath, 'Ligne 4');
  log(filePath, 'Ligne 5');
  console.log('Logs Done');
  console.timeEnd('Total');
}
catch (err) {
  console.log('Erreur : ' + err.message);
}
console.timeEnd('Thread Indispo');
