
const uppercase = (str, callback) => {
  setTimeout(() => {
    return callback(str.toUpperCase());
  }, 500);
};

const users = [
  { id: 1, name: 'Mark' },
  { id: 2, name: 'Paul' },
];

const findUserById = (id) => new Promise((resolve, reject) => {
  const result = users.find((user) => user.id === id);

  if (result) {
    return resolve(result);
  }

  return reject(new Error(`User with ${id} not found.`));
});

const getUserName = (userId) =>  findUserById(userId).then((user) => user.name);

const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      };

      return reject({ error: 'Não possui esse tipo de animal.' });
    }, 100);
  })
);

const getListAnimals = (type) => (
  findAnimalsByType(type).then(list => list)
);

const getAnimal = (name) => {
  return Animals.find((animal) => animal.name === name);
}

function findAnimalsByName(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (getAnimal(name) !== undefined) {
      return resolve(getAnimal(name));
    }
    else {
      return reject(new Error('Nenhum animal com esse nome!'));
    }
  })
}, 200);
}

function getAnimalsbyAge(age) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      const animalsAgedSpecificAge = Animals.filter((animal) => animal.age === age);
      if (animalsAgedSpecificAge.length !== 0) {
        return resolve(animalsAgedSpecificAge)
      }
      else {
        return reject(new Error('Nenhum animal com essa idade'))
      }
    },200);
  })
}



module.exports = {
  uppercase,
  getUserName,
  findUserById,
  users,
  getRepos,
  getListAnimals,
  findAnimalsByName,
  getAnimal,
  getAnimalsbyAge
}