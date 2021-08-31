const assert = require('assert');
const summationOf = num => {
  if(typeof(num) != 'number') {
    throw new Error('Parâmetro deve ser númerico');
  }
  let summation = 0;
  for(let index = 0;index <= num; index +=1) {
    summation += index;
  }
  return summation;
}
assert.strictEqual(summationOf(1),1);
assert.strictEqual(summationOf(3),6);
assert.strictEqual(summationOf(5),15);
assert.throws(() => {
  summationOf('b');
});