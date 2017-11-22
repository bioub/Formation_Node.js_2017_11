const hello = require('../src/hello');
const assert = require('assert');

try {
  assert.deepEqual(hello('Romain'), 'Bonjour Romain');
  console.log('Les tests de hello passent');
}
catch (err) {
  console.log('Les tests de hello échouent');
  process.exit(1);
}
