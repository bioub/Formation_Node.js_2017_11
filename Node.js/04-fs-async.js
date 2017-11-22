const fs = require('fs');
const path = require('path');

const dirPath = path.resolve(__dirname, 'logs');
const filePath = path.resolve(dirPath, 'app.log');

function log(filePath, msg, cb) {
  const line = `[${(new Date()).toISOString()}] ${msg}\n`
  fs.appendFile(filePath, line, cb);
}

console.time('Total');
console.time('Thread Indispo');

fs.stat(dirPath, (err, stats) => {
  if (err && err.code === 'ENOENT') {
    return fs.mkdir(dirPath, (err) => {
      if (err) {
        return console.log('Erreur : ' + err.message);
      }
      next();
    });
  }
  next();
});

function next() {
  log(filePath, 'Ligne 1', (err) => {
    if (err) {
      return console.log('Erreur : ' + err.message);
    }
    log(filePath, 'Ligne 2', (err) => {
      if (err) {
        return console.log('Erreur : ' + err.message);
      }
      log(filePath, 'Ligne 3', (err) => {
        if (err) {
          return console.log('Erreur : ' + err.message);
        }
        log(filePath, 'Ligne 4', (err) => {
          if (err) {
            return console.log('Erreur : ' + err.message);
          }
          log(filePath, 'Ligne 5', (err) => {
            if (err) {
              return console.log('Erreur : ' + err.message);
            }
            console.log('Logs Done');
            console.timeEnd('Total');
          });
        });
      });
    });
  });
}

console.timeEnd('Thread Indispo');
