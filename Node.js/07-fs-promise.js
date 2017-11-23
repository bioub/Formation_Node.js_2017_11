const fs = require('fs-extra');
const path = require('path');
const util = require('util');

const mkdir = util.promisify(fs.mkdir);

const dirPath = path.resolve(__dirname, 'logs');
const filePath = path.resolve(dirPath, 'app.log');

function log(filePath, msg) {
  const line = `[${(new Date()).toISOString()}] ${msg}\n`
  return new Promise((resolve, reject) => {
    fs.appendFile(filePath, line, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
}

console.time('Total');
console.time('Thread Indispo');

// fs.stat(dirPath)
//   .catch(() => mkdir(dirPath))
fs.ensureDir(dirPath)
  .then(() => log(filePath, 'Ligne 1'))
  .then(() => log(filePath, 'Ligne 2'))
  .then(() => log(filePath, 'Ligne 3'))
  .then(() => log(filePath, 'Ligne 4'))
  .then(() => log(filePath, 'Ligne 5'))
  .then(() => {
    console.log('Logs Done');
    console.timeEnd('Total');
  })
  .catch((err) => {
    console.log('Erreur : ' + err.message);
  });

console.timeEnd('Thread Indispo');
