const fs = require('fs');
const path = require('path');
const bluebird = require('bluebird');

bluebird.promisifyAll(fs);

const dirPath = path.resolve(__dirname, 'logs');
const filePath = path.resolve(dirPath, 'app.log');

function log(filePath, msg) {
  const line = `[${(new Date()).toISOString()}] ${msg}\n`
  return fs.appendFileAsync(filePath, line);
}

console.time('Total');
console.time('Thread Indispo');

fs.statAsync(dirPath)
  .catch(() => fs.mkdirAsync(dirPath))
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
