const greetPeople = (people) => {
  let greeting = 'Hello ';

  for (const person in people) {
    greeting += people[person];
  }
  return greeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

const assert = require('assert');
assert.strictEqual(greetPeople(parameter[0]),result[0]);
assert.strictEqual(greetPeople(parameter[1]),result[1]);
assert.strictEqual(greetPeople(parameter[2]),result[2]);