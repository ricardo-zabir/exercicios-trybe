

function numberConverter(numeroRomano) {
let numeroDef = 0;
let numero = [];
function converter(letter){
  let num = null;
  switch(letter) {
  case "I" : num =1;
  break;

  case "V" : num=5;
  break;

  case "X" : num=10;
  break;

  case "L" : num=50;
  break;

  case "C" : num=100;
  break;

  case "D" : num=500;
  break;

  case "M" : num=1000;
  break;
  }
  return num;
}

for(let index=0;index<numeroRomano.length;index+=1){
numero.push(converter(numeroRomano[index]));
}

for(let superIndex=0;superIndex<numero.length-1;superIndex+=1) {
  if(numero[superIndex+1]>numero[superIndex]) {
    numero[superIndex] = -numero[superIndex];
  }
}

for(let hyperIndex=0;hyperIndex<numero.length;hyperIndex+=1) {
  numeroDef += numero[hyperIndex];
}
return numeroDef;
}
console.log(numberConverter("MCMLXXXVI"));
console.log(numberConverter("CXXVIII"));
console.log(numberConverter("MMXXI"));

function arrayOfNumbers (vector) {
  let evenNumbers = [];
  for(let index=0;index<vector.length;index+=1) {
    for(let superIndex=0;superIndex<vector[index].length;superIndex+=1) {
      if(vector[index][superIndex] % 2 === 0 ) {
        evenNumbers.push(vector[index][superIndex]);
      }
    }
  }
  return evenNumbers;
}
console.log(arrayOfNumbers([[1, 2], [3,4,5,6], [7,8,9,10]]));

function fruitsTracker(basket) {
  let tracker = {
  
  }
  let passage = false;
  for(let index=0;index<basket.length;index+=1) {
      for (const key in tracker) {
          if(basket[index]===key) {
            tracker[key] +=1;
            passage=true;
          }
          }
      if(passage===false) {
        tracker[basket[index]] = 1;
      }
      passage=false;
    }
return tracker;  
  }
  console.log(fruitsTracker(['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva']));
  let keys = 0;
  let fruitsTrackerContainer = fruitsTracker(['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva']);
  for (const key in fruitsTrackerContainer) {
    keys+=1;
    }
  console.log("Sua cesta possui : ");
  for (const key in fruitsTrackerContainer) {
    console.log(fruitsTrackerContainer[key] + " "+ key);
  }

