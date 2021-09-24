const functions = require('./exercise');

//jest.mock('./exercise');

describe('Testa a função randomNumber', () => {
  it('Usa 10 como valor padrão para testar a função', () => {
    functions.randomNumber = jest.fn();
    functions.randomNumber.mockReturnValue(10);
    functions.randomNumber();
    expect(functions.randomNumber).toHaveBeenCalledTimes(1);
    expect(functions.randomNumber).toHaveBeenCalledWith();
    expect(functions.randomNumber()).toBe(10);
  });
  it('Testa a função com uma implementação diferente', () => {
    const mockRandomNumber = jest.spyOn(functions,'randomNumber').mockImplementation((a,b) => a / b);
    expect(mockRandomNumber(8,2)).toBe(4);
    expect(mockRandomNumber(15,5)).toBe(3);
  });
  it('Testa a função com outra implementação diferente', () => {
    const mockRandomNumber = jest.spyOn(functions,'randomNumber').mockImplementation((a,b,c) => a * b * c);
    expect(mockRandomNumber(1,2,4)).toBe(8);
    expect(mockRandomNumber(21,2,1)).toBe(42);
  });
  it('Reseta a função e habilita a função de retornar o dobro do parâmetro', () => {
    functions.randomNumber.mockReset();
    expect(functions.randomNumber).toHaveBeenCalledTimes(0);
    functions.randomNumber.mockImplementation((num) => num * 2);
    expect(functions.randomNumber(18)).toBe(36);
  })
});

describe('Testa as funções relacionadas as strings', () => {
  it('Troca a implementação da função que converte tudo para letras maiúsculas', () => {
    //functions.toUpperCase = jest.fn();
    const mocktoUpperCase = jest.spyOn(functions, 'toUpperCase').mockImplementation((str) => str.toLowerCase());
    expect(mocktoUpperCase('ABC')).toBe('abc');
    functions.toUpperCase.mockImplementation((str) => str.toLowerCase());
    expect(functions.toUpperCase('ABC')).toBe('abc');
  });
  it('Troca a implementação da função que retorna a primeira letra', () => {
    functions.firstLetter = jest.fn();
    functions.firstLetter.mockImplementation((str) => str[str.length - 1]);
    expect(functions.firstLetter('abcede')).toBe('e');
  });
  it('Troca a implementação da função que concatena duas strings', () => {
    functions.uniteStrings = jest.fn();
    functions.uniteStrings.mockImplementation((str1, str2, str3) => `${str1}${str2}${str3}`);
    expect(functions.uniteStrings('abc', '123', 'efg')).toBe('abc123efg');
  });
  it('Restaurar a implementação original de toUpperCase', () => {
    const mocktoUpperCase = jest.spyOn(functions, 'toUpperCase').mockImplementation((str) => str.toLowerCase());
    expect(mocktoUpperCase('ABC')).toBe('abc');
    functions.toUpperCase.mockRestore();
    expect(functions.toUpperCase('abc')).toBe('ABC');
  })
});
describe('Testa a função callPromise', () => {
  it('Testando o resolve da função', () => {
    const mockPromise = jest.spyOn(functions,'callPromise').mockResolvedValue("request sucess");
    expect(mockPromise('https://dog.ceo/api/breeds/image/random')).resolves.toBe("request sucess");
  });
  it('Testando o reject da função', () => {
    const mockPromise = jest.spyOn(functions,'callPromise').mockRejectedValue("request failed");
    expect(mockPromise('https://dog.ceo/api/breeds/image/random')).rejects.toMatch("request failed");
  })
  
})
