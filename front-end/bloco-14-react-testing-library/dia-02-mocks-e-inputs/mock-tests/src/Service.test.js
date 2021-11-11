const service = require('./Service')

test('Testa a função geradora de número aleatório' , () => {
  service.randomNumberGenerator = jest.fn().mockReturnValue(10)
  service.randomNumberGenerator()
  expect(service.randomNumberGenerator).toHaveBeenCalled();
  service.randomNumberGenerator()
  expect(service.randomNumberGenerator).toHaveBeenCalledTimes(2);
  expect(service.randomNumberGenerator()).toBe(10)
});
test('Testa uma implementação mockada da função', () => {
  service.randomNumberGenerator = jest.fn().mockImplementation((a,b) => {
    return a/b;
  });
  expect(service.randomNumberGenerator(10,2)).toBe(5);
  expect(service.randomNumberGenerator).toHaveBeenCalled();
  expect(service.randomNumberGenerator(20,10)).toBe(2);
  expect(service.randomNumberGenerator).toHaveBeenCalledTimes(2);
})