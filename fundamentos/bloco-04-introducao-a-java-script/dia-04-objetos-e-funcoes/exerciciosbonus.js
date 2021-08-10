

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