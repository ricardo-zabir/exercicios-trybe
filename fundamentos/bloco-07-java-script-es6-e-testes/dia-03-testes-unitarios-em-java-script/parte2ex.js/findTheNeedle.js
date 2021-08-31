const assert = require('assert');

const findTheNeedle = (arrayOfWords,word) => {
  let position;
  for(let index = 0; index < arrayOfWords.length; index +=1) {
    if(arrayOfWords[index] === word) {
      position = index;

    }
  }
  if(typeof(position) != 'number') {
    position = -1;
  }
  return position;
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);