const math = require('./math');
jest.mock("./math");

// test("#somar", () => {
//   // Aqui testamos se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno

//   math.somar.mockImplementation((a, b) => a + b);
//   math.somar(1, 2);

//   expect(math.somar).toHaveBeenCalled();
//   expect(math.somar).toHaveBeenCalledTimes(1);
//   expect(math.somar).toHaveBeenCalledWith(1, 2);
//   expect(math.somar(1, 2)).toBe(3);
// });

// test("#somar sem async/await", () => {
//   // testando se a função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno
//   const mockSomar = jest.spyOn(math, "somar");

//   mockSomar(1, 2);
//   expect(mockSomar).toHaveBeenCalled();
//   expect(mockSomar).toHaveBeenCalledTimes(1);
//   expect(mockSomar).toHaveBeenCalledWith(1, 2);
//   expect(mockSomar(1, 2)).resolves.toBe(3);
//   return expect(mockSomar(1, 2)).resolves.toBe(3);
// });
// test("#somar com async/await", async () => {
//   // Como alternativa você pode usar async/await, nenhuma é superior a outra. Você pode combinar e apenas depende de qual estilo você acha que torna seus testes mais simples.
//   const mockSomar = jest.spyOn(math, "somar");

//   mockSomar(1, 2);
//   expect(mockSomar).toHaveBeenCalled();
//   expect(mockSomar).toHaveBeenCalledTimes(1);
//   expect(mockSomar).toHaveBeenCalledWith(1, 2);
//   await expect(mockSomar(1, 2)).resolves.toBe(3);
// });

test('testando a subtração com mock', () => {
  math.subtrair = jest.fn();

  math.subtrair();
  expect(math.subtrair).toHaveBeenCalled();
});

test('testando a multiplicação com o retorno padrão 10', () => {
  math.multiplicar = jest.fn().mockReturnValue(10);
  math.multiplicar();
  expect(math.multiplicar).toHaveBeenCalled();
  expect(math.multiplicar()).toBe(10);
});

test('testando a função somar impelementando a soma', () => {
  math.somar.mockImplementation((a,b) => a+b);
  math.somar(6,13);

  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledWith(6,13);
  expect(math.somar(6, 13)).toBe(19);
})

test('testando a função dividir com variadas implementações experimentais', () => {
  math.dividir = jest.fn().mockReturnValue(15)
  .mockReturnValueOnce(2)
  .mockReturnValueOnce(5);


  expect(math.dividir).toHaveBeenCalledTimes(0);
  expect(math.dividir()).toBe(2);
  expect(math.dividir).toHaveBeenCalledTimes(1);
  expect(math.dividir()).toBe(5);
  expect(math.dividir).toHaveBeenCalledTimes(2);
  expect(math.dividir()).toBe(15);
  expect(math.dividir).toHaveBeenCalledTimes(3);


});

test('testando a função de subtração utilizando o spyOn', () => {
  const mockSubtracao = jest.spyOn(math, 'subtrair')
  .mockReturnValue(20);

  expect(mockSubtracao()).toBe(20);

    mockSubtracao.mockRestore();
});

