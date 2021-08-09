
let numero = [];
let numeroRomano = "CIV";

let i = {
  sozinho: 1 ,
  antes: -1 ,

}
let v = 5;

let x = {
  sozinho: 10 ,
  antes: -10
}

let l = 50;

let c = {
  sozinho: 100 ,
  antes: -100
}

let d = 500;

let m = 1000;

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
numero.push[converter[numeroRomano[index]]]
}


for(let superIndex=0;superIndex<numero.length;superIndex+=1){
  if(numero[index+1]>numero[index]){numero[index]=-numero[index]}
}

for(let megaIndex=0;megaIndex<numero.length/2;megaIndex+=1) {
  if(index=numero.length){break;}
  numero[index] += numero[index+1];
  numero[index+1] = 0;
}

console.log(numero);