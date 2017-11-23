// Module CommonJS
// (function (exports, require, module, __filename, __dirname) {

const convertToNumber = val => Number(val);

const sum = (a, b) => convertToNumber(a) + convertToNumber(b);
const substract = (a, b) => a - b;
exports.multiply = (a, b) => a * b;
module.exports.divide = (a, b) => a / b;

exports.sum = sum;
module.exports.substract = substract;

// });
