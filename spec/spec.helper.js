const  fs = require('fs');
const  chai = require('chai');
global.expect = chai.expect;

let  fizzBuzz = fs.readFileSync('./src/js/fizz-buzz.js');
eval( fizzBuzz + `\nexports.FizzBuzz = FizzBuzz;`)