
const {uppercase,
getUserName,
findUserById,
users,
getRepos,
getListAnimals,
findAnimalsByName,
getAnimal,
getAnimalsbyAge,
} = require('./exercise');



describe('Testa a função que transforma todas as letras em maiúsculas', () => {
  test('Testa se abc se tornam ABC', (done) => {
    uppercase('abc', (uppercaseString) => {
      try {
        expect(uppercaseString).toBe('ABC')
        done();
      } catch(error) {
        done(error);
      }
    })
});
});

describe('Testa a função getUserName', () => {
  test('Testa se retorna o esperado caso o ID seja válido', () => {
    expect(getUserName(2)).resolves.toBe('Paul')
  });
  test('Testa se retona o esperado caso o ID não seja válido', () => {
    expect(getUserName(3)).rejects.toThrow(new Error('User with 3 not found.'))
  })
});

describe('Testa a função getUserName utilizando async/await', () => {
  test('Testa se retorna o esperado caso o ID seja válido', async() => {
    const result = await getUserName(1);
    expect(result).toBe('Mark');
  });
  test('Testa se retorna o esperado caso o ID não seja válido', async() => {
    expect.assertions(1);
    try {
      await getUserName(3);
    } catch(error) {
      expect(error).toEqual(new Error('User with 3 not found.'));
    }
  });
});

describe('Testa se os repositórios se encontram presentes na URL inserida', () => {
  test('Testa se o projeto to-do list da turma 1 está presente', () => {
    return getRepos('https://api.github.com/orgs/tryber/repos').then((repos) => {
      expect(repos).toContain('sd-01-week4-5-project-todo-list');
    });
  })
  test('Testa se o projeto meme generator da turma 1 está presente', () => {
    return getRepos('https://api.github.com/orgs/tryber/repos').then((repos) => {
      expect(repos).toContain('sd-01-week4-5-project-meme-generator');
  });
});
});

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => (
      findAnimalsByName('Dorminhoco').then((animal) => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      })
    ));
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return findAnimalsByName('Bob').catch((error) => {
        expect(error.message).toEqual('Nenhum animal com esse nome!');
      });
    });
  });
});

describe('Testando a promise- getAnimalsByAge', () => {
  test('Quando existe animal com a idade', () => {
    getAnimalsbyAge(5).then((arrayOfAnimals) => {
      expect(arrayOfAnimals).toEqual([{ name: 'Preguiça', age: 5, type: 'Cat' }]);
    })
  });
  test('Quando não existe animal com a idade', () => {
    return getAnimalsbyAge(10).catch((error) => {
      expect(error.message).toEqual('Nenhum animal com essa idade');
    })
  })
})
