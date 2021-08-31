const assert = require('assert');

const sumAllNumbers = arrayOfNumbers => {
  let number = 0;
  for(let index = 0; index < arrayOfNumbers.length; index += 1) {
    number += arrayOfNumbers[index];
  }
  return number;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);