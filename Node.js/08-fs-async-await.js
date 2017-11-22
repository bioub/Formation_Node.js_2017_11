const fs = require('fs-extra');
const path = require('path');

const dirPath = path.resolve(__dirname, 'logs');
const filePath = path.resolve(dirPath, 'app.log');

function log(filePath, msg) {
  const line = `[${(new Date()).toISOString()}] ${msg}\n`
  return fs.appendFile(filePath, line);
}

console.time('Total');
console.time('Thread Indispo');

async function main() {
  try {
    try {
      const stats = await fs.stat(dirPath);
    }
    catch (err) {
      if (err.code === 'ENOENT') {
        await fs.mkdir(dirPath);
      }
    }

    await log(filePath, 'Ligne 1');
    await log(filePath, 'Ligne 2');
    await log(filePath, 'Ligne 3');
    await log(filePath, 'Ligne 4');
    await log(filePath, 'Ligne 5');
    console.log('Logs Done');
    console.timeEnd('Total');
  }
  catch (err) {
    console.log('Erreur : ' + err.message);
  }
}

main();

console.timeEnd('Thread Indispo');
