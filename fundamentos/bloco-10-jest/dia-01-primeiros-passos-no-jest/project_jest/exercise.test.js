const sum = require('./exercise');

describe('- testa a função de somar dois números' , () => {
  test('soma dois valores: ', () => {
    expect(sum(4,5)).toBe(9);
    expect(sum(0,0)).toBe(0);
    expect(() => {
      sum(4,'5')
    }).toThrowError("parameters must be numbers");

});
});



