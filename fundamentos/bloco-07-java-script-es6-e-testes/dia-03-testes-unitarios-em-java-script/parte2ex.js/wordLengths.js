const assert = require('assert');

const wordLengths = arrayOfWords => {
  let arrayOfLengths = [];
  for (let index = 0; index < arrayOfWords.length; index += 1) {
    arrayOfLengths.push(arrayOfWords[index].length);
  }
  return arrayOfLengths;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);