const http = require('http');

//importing custom module
const { getCurrent, greet, sum } = require('./utils');

console.log(sum());
console.log(greet());