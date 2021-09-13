const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Strawberry', 'Grape', 'Banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Yogurt', 'Chocolate', 'Chantilly'];

const fruitSalad = (fruit, additional) => {
  return [...fruit,...additionalItens];
};

console.log(fruitSalad(specialFruit, additionalItens));

function quantosParams(...args) {
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88
console.log(sum(11,3,4,55,123,43,231,2,6));

const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};
let { name } = product;
console.log(name); // Smart TV Crystal UHD
const {price,seller} = product;
console.log(price);
console.log(seller);
console.log(product);


const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a: nameAgain, b: classAssigned, c: subject } = student;

console.log(nameAgain); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática



const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas

const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
[comida,animal,bebida] = ['arroz','gato','água'];
console.log(comida, animal, bebida); 

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];


// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

[,,, ...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];

const persona = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

//const { nationality = 'Brazilian' } = persona;

//console.log(nationality);


const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0

const getNationality = ({ firstName = 'Fulano' , nationality = 'brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};
const vazia = {

}
console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));
console.log(getNationality(vazia));


const newUser = (id, name, email) => {
  return {
    id,
    name,
    email,
  };
};

console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,});

console.log(getPosition(-19.8157, -43.9542));

const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting(); // // Welcome usuário!

const multiply = (number, value = 1) => {
  return number * value;
};

console.log(multiply(8));
console.log(multiply(8,2));