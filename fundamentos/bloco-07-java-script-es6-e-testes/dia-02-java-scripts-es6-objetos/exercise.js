const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};
console.log(order);
const customerInfo = (order) => {
  console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R.${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`);

}

customerInfo(order);

const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  order.order.payment = '60';
  const pizzas = Object.keys(order.order.pizza);
  const drinks = Object.keys(order.order.drinks.coke);
  console.log(drinks);
  console.log(`Olá ${order.name}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${order.order.drinks.coke[drinks[0]]} é R$${order.order.payment},00 `)

}
orderModifier(order);

// Parte 2
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Ex.1
const addShift = (objeto,key,value) => {
  objeto[key] = value;
}

addShift(lesson2,'turno','manhã');
// Ex.2
const listKeys = objeto => Object.keys(objeto);
// Ex.3
const objectSize = objeto => Object.keys(objeto).length;
// Ex.4
const showValue = objeto => Object.values(objeto);
// Ex. 5
const allLessons = {
  
}

const arrayToObject = lesson => {
  let objectNew = {

  }
  for(let index = 0; index < Object.entries(lesson).length; index +=1) {
    objectNew[lesson[index][0]] = lesson[index][1];
  }
  return objectNew;
}
arrayToObject(Object.entries(lesson1));
allLessons.lesson1 = arrayToObject(Object.entries(lesson1));
allLessons.lesson2 = arrayToObject(Object.entries(lesson2));
allLessons.lesson3 = arrayToObject(Object.entries(lesson3));
console.log(allLessons);
// Ex. 6
const allStudents = object => {
  let numberOfStudents = 0;
  for(let index = 0; index < Object.keys(allLessons).length;index +=1) {
  numberOfStudents += object[Object.keys(allLessons)[index]].numeroEstudantes;
  }
  return numberOfStudents;
}

console.log(allStudents(allLessons));
// Ex.7
const getValueByNumber = (objeto,posição) => objeto[Object.keys(objeto)[posição]];
console.log(getValueByNumber(lesson1,0));
// Ex. 8
const verifyPair = (objeto,chave,valor) => objeto[chave] === valor ? true : false;
console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Ex. Bonûs 1
const mathClassViewers = (objetoTotal,subject) => {
  let mathClassAttendance = 0;
  const keysDoObjeto = Object.keys(objetoTotal);
  for(let index = 0; index < keysDoObjeto.length; index +=1) {
    for(let superIndex = 0;superIndex < Object.keys(objetoTotal[keysDoObjeto[index]]).length;superIndex +=1) {
      let keysOfTheLesson = Object.keys(objetoTotal[keysDoObjeto[index]]);
      let valuesOfTheLesson = Object.values(objetoTotal[keysDoObjeto[index]]);
      console.log(valuesOfTheLesson[superIndex]);
      if(valuesOfTheLesson[superIndex] === subject ) {
        mathClassAttendance += objetoTotal[keysDoObjeto[index]].numeroEstudantes;
      }
    }
  }
return mathClassAttendance;
}
console.log(mathClassViewers(allLessons,'Matemática'));
// Ex. Bônus 2
const createReport = (objetoGeral,profissional) => {
  const reportObject = {
    professor: '',
    aulas: '',
    estudantes: '',
  }
  reportObject.professor = profissional;
  const keysDoObjeto = Object.keys(objetoGeral);
  for(let index = 0; index < keysDoObjeto.length; index +=1) {
    for(let superIndex = 0;superIndex < Object.keys(objetoGeral[keysDoObjeto[index]]).length;superIndex +=1) {
      let keysOfTheLesson = Object.keys(objetoGeral[keysDoObjeto[index]]);
      let valuesOfTheLesson = Object.values(objetoGeral[keysDoObjeto[index]]);
      console.log(valuesOfTheLesson[superIndex]);
      if(valuesOfTheLesson[superIndex] === profissional ) {
        reportObject.aulas = objetoGeral[keysDoObjeto[index]].materia;
      }
    }
  }
  reportObject.estudantes = mathClassViewers(allLessons,reportObject.aulas);
return reportObject
}
console.log(createReport(allLessons,'Carlos'));
console.log(createReport(allLessons,'Maria Clara'));