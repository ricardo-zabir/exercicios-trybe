// Parte 1
// Ex. 1
const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope}  ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

// Ex. 2
let oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortTheNumbers = arrayOfNumbers => {
  for(let index = 0; index < arrayOfNumbers.length; index += 1) {
    for(let superIndex = 0; superIndex < arrayOfNumbers.length; superIndex += 1) {
      if(arrayOfNumbers[index] < arrayOfNumbers[superIndex]) {
        arrayOfNumbers.push(arrayOfNumbers[superIndex])
        arrayOfNumbers[superIndex] = arrayOfNumbers[index];
        arrayOfNumbers[index] = arrayOfNumbers[arrayOfNumbers.length-1];
        arrayOfNumbers.pop();
      }
    }
  }
  return arrayOfNumbers;
}
oddsAndEvens = sortTheNumbers(oddsAndEvens);
console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); 

// Parte 2
// Ex. 1
const fatorial = num => {
  let result = 1;
  for(let index = num; index >1; index -= 1) {
    result *= index;
  }
  return result;
}

console.log(fatorial(4));

// Ex. 2
const longestWord = phrase => {
  const words = phrase.split(" ");
  let biggestWord = words[0];
  for(let index = 0;index < words.length; index +=1) {
    words[index].length > biggestWord.length ? biggestWord = words[index] : biggestWord = biggestWord;
  }
  return biggestWord;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// Ex. 3
const button = document.querySelector('#test-button');
const p = document.querySelector('#count-of-clicks');
let clickCount = 0;
p.innerHTML = clickCount;
button.addEventListener('click', () => {
  clickCount += 1;
  p.innerHTML = clickCount;
});

// Ex. 4
const changeChar = theString => 'Tryber x aqui!'.replace('x',theString);
console.log(changeChar('Ricardo'));
const updatedString = changeChar('Ricardo')
const skills = ['HTMl','CSS','JS','Java','Phyton'];
var sortedSkills = skills.sort();

const finalString = (updatedString,sortedSkills) => {
  const stringFinal = `${updatedString} Minhas cinco principais habilidades são: 
  ${sortedSkills[0]}
  ${sortedSkills[1]}
  ${sortedSkills[2]}
  ${sortedSkills[3]}
  ${sortedSkills[4]}`
  return stringFinal;
}

console.log(finalString(updatedString,sortedSkills));
