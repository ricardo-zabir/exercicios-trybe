const {searchEmployee} = require('./bonus-exercise');

describe('Testa a função searchEmployee', () => {
  it('A função está definida', () => {
    expect(searchEmployee).toBeDefined()
  });
  it('A função joga um erro quando um id incorreto é enviado', () => {
    expect(() => {
      searchEmployee('12345-6','lastName');
    }).toThrow(new Error('"ID não identificada"'));
  });
  it('A função joga um erro quando uma informação inexistente é requisitada', () => {
    expect(() => {
      searchEmployee('1256-4','middleName')
    }).toThrow(new Error('Informação indisponível'))
  });
  it('A função retorna o que é esperado quando ambos os parâmetros estão corretos', () => {
    expect(searchEmployee('1256-4','lastName')).toBe('Bezos');
    expect(searchEmployee('4678-2', 'firstName')).toBe('Paul');
    expect(searchEmployee('5569-4', 'specialities')).toEqual(['Frontend', 'Redux', 'React', 'CSS']);
  })
})