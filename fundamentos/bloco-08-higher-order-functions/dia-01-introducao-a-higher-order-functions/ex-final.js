// Ex. 1
const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};



const setEmail = name => {
  return {
    nomeCompleto: name,
    email: `${name.replace(' ','_')}@trybe.com`,
  }
}

console.log(newEmployees(setEmail));

// Ex. 2
const rng = (num,checkFunction) => {
   return checkFunction(num,Math.trunc(Math.random()*5 +1));
}

const checkFunction = (userNumber,actualNumber) => {
  if(userNumber !== actualNumber) {
    return "Tente novamente"
  } else {
    return "Parabéns você ganhou"
  }
}

console.log(rng(2,checkFunction));

// Ex. 3
const testCheck = (rightAnswers, studentsAnswers, checkAnswers) => {
  return checkAnswers(rightAnswers,studentsAnswers);
}

const checkAnswers = (rightAnswers,studentsAnswers) => {
  let cont = 0;
  for(let index = 0; index < rightAnswers.length; index += 1) {
    if(studentsAnswers[index] === rightAnswers[index]) {
      cont += 1;
    }
    else if(studentsAnswers[index] !== rightAnswers[index] && studentsAnswers[index] !== 'N.A') {
      cont -= 0.5;
    }
  }
  return cont;
}
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
console.log(testCheck(RIGHT_ANSWERS,STUDENT_ANSWERS,checkAnswers));