const fs = require('fs');

const fichiersTests = fs.readdirSync(__dirname + '/test');

for (let f of fichiersTests) {
  if (f.startsWith('test-')) {
    require(__dirname + '/test/' + f);
  }
}
