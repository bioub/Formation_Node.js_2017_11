const maths = require('../src/maths');
const assert = require('assert');

console.log(maths.sum(1, 2)); // 3
console.log(maths.sum(1, '2')); // 3

try {
  assert.deepEqual(maths.sum(1, 2), 3);
  assert.deepEqual(maths.sum(1, '2'), 4);
  console.log('Les tests de maths passent');
}
catch (err) {
  console.log('Les tests de maths échouent');
  process.exit(1);
}