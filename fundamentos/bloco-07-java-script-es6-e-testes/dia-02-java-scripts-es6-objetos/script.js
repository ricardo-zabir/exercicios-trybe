// Criando novas propriedades em objetos
const customer = {
  firstName: 'Jeferson',
  age: 19,
  job: 'Soccer player',
};
customer.lastName = 'Farias';
console.log(customer);

function addToObject(object,key,value) {
  object[key] = value;
  return object;
}

const newObject = addToObject(customer,'country', 'Brazil');
console.log(newObject);
// Object.keys
let coolestTvShow = {
  name: "Suits",
  genre: "drama",
  createdBy: "IDK",
  favoriteCharacter: "Harvey Specter",
  quote: "Win a no win situation by rewriting the rules.",
  seasons: 9,
};

for(const key in coolestTvShow) {
  console.log(key);
}

console.log(Object.keys(coolestTvShow));

function studentQuality(student) {
  const levels = Object.keys(student);
  for(let index = 0; index < levels.length; index += 1) {
    console.log(`${levels[index]}, Nível: ${student[levels[index]]}`);
  }
}
const student = {
  HTML : 'Muito bom' ,
  CSS : 'Bom' ,
  JavaScript : 'Ótimo' ,
  SoftSkills : 'Muito bom' ,
}
studentQuality(student);

// Object.values
coolestTvShow = {
  name: "Suits",
  genre: "drama",
  createdBy: "IDK",
  favoriteCharacter: "Harvey Specter",
  quote: "Win a no win situation by rewriting the rules.",
  seasons: 9,
}
console.log(Object.values(coolestTvShow));

//Object.entries
const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue[1][1]);
console.log(pairKeyValue[2][1]);
console.log(pairKeyValue[0][0]);
const showIt = (paises) => { for(let index = 0;index < pairKeyValue.length; index+=1) {
  console.log('------------');
  console.log(`País: ${paises[index][0]}`);
  console.log(`Capital : ${paises[index][1]}`);
}};
showIt(pairKeyValue);
//Object.assign
const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName);
console.log(newPerson);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);