const path = require('path');

console.log(__filename);
console.log(__dirname); // toujours Node.js
console.log(path.extname(__filename));

console.log(process.cwd());

const pathJeuFinal = __dirname + '/../JeuFinal';

console.log(path.join(__dirname, '..', 'JeuFinal'));
console.log(path.join(__dirname + '/../JeuFinal'));
console.log(path.resolve(__dirname, '..', 'JeuFinal'));
console.log(path.resolve(__dirname + '/../JeuFinal'));
