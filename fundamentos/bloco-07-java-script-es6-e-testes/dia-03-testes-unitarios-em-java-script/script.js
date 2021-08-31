const assert = require('assert'); // Sintaxe para incluir o módulo assert

assert.strictEqual(50, 50); // Sem erros: 50 === 50
// assert.strictEqual(50, 70); // AssertionError: 50 === 70



function division(x, y) {
  return x / y;
}

let expected = division(9, 3);

assert.strictEqual(expected, 3, 'Nove dividido por três é igual a três');

function add(a, b) {
  return a + b;
}

expected = add(1, 2);

assert.ok(expected === 3, 'Um mais dois é igual a três'); // Checa se o primeiro argumento é verdadeiro
assert.strictEqual(expected, 3, 'Um mais dois é igual a três'); // Checa se o primeiro e segundo argumentos são iguais em valor e tipo (===)
assert.notStrictEqual(expected, 4, 'Um mais dois é igual a três (e não quatro!)'); // Checa se o primeiro e segundo argumentos são diferentes (!==)


const list1 = [1, 2, 3, 4, 5];
const list2 = [1, 2, 3, 4, 5];

assert.deepStrictEqual(list1, list2, 'Erro: list1 e list2 não são estritamente iguais');

const person1 = { name: 'john', age: 21 };
const person2 = { name: 'john', age: 21 };

assert.deepStrictEqual(person1, person2, 'Erro: person1 e person2 não são estritamente iguais');

const person3 = { name: 'john', age: 19 };

assert.notDeepStrictEqual(person1, person3, 'Erro: os valores dos objetos são estritamente iguais');

function division(x, y) {
  if (y === 0) throw new Error('parameter y must not be 0');
  return x/y;
}


// declaração da função division, definida anteriormente...

assert.strictEqual(division(10, 2), 5); // OK
assert.strictEqual(division(10, 1), 10); // 💣

const myFunction = () => {}
assert.strictEqual(typeof myFunction, 'function');
