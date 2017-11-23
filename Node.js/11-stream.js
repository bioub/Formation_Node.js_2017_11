const fs = require('fs');

const rs = fs.createReadStream(__dirname + '/logs/app.log');
// const ws = fs.createWriteStream(__dirname + '/logs/app2.log');
const ws = process.stdout;

// cat app.log | echo
rs.pipe(ws);
