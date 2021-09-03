const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);

const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names); 

//Para fixar:
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach(showEmailList);

const numbersa = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (numbers) => {
  return numbers.find((number) => number % 3 === 0 && number % 5 ===0 )
}

console.log(findDivisibleBy3And5(numbersa));

const namesa = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (names) => {
  return names.find((name) => name.length === 5)
}

console.log(findNameWithFiveLetters(namesa));

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id,musicas) {
  return musicas.find(musica => musica.id === id);
}

console.log(findMusic('31031685',musicas));

const namesb = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, nameWanted) => {
  return arr.some((name) => name === nameWanted)
}

console.log(hasName(namesb, 'Ana'));

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  return arr.every((element) => element.age >= minimumAge)
}

console.log(verifyAges(people, 18));

const peoplea = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

peoplea.sort((persona,personb) => persona.age - personb.age)

console.log(peoplea);

peoplea.sort((persona,personb) => personb.age - persona.age)

console.log(peoplea);