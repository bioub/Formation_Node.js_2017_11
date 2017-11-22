const fs = require('fs');

const fichiersTests = fs.readdirSync('test');

for (let f of fichiersTests) {
  if (f.startsWith('test-')) {
    require('./test/' + f);
  }
}
