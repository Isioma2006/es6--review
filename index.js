// index.js

import { Calculator, getData, squares } from './tools.js';

// Testing the Calculator class
const calc = new Calculator();
console.log('Addition:', calc.add(2, 3)); // 5
console.log('Subtraction:', calc.subtract(5, 2)); // 3

// Testing async function
getData('https://example.com');

// Testing map functionality
console.log('Squares:', squares); // [1, 4, 9, 16, 25]