function randomNumberGenerator(amount) {
  let megaSenaNumbers = [];
  for(let index=0;index<amount;index+=1) {
    megaSenaNumbers.push(Math.floor(Math.random()*60+1));
  }
  return megaSenaNumbers;
}
function sameNumberCheck(array) {
  let again = 0;
  let repetitive = false;
  for(let i=0;i<6;i+=1){again=0;
    for(let j=0;j<6;j+=1){
      if(array[i]==array[j]){again+=1;}
    }
    if(again>1){repetitive = true;}
  }
return repetitive;
}
function rightNumbers(arrayMega,meuArray){
  let cont =0;
  for(let index=0;index<6;index+=1){
    for(let jndex=0;jndex<6;jndex+=1){
      if(meuArray[jndex]===arrayMega[index]) {
        cont+=1;
      }
    }
  }
  return cont;
}

let megaSenaNumbers = randomNumberGenerator(6);


while(sameNumberCheck(megaSenaNumbers)===true){
  megaSenaNumbers=randomNumberGenerator(6);
  sameNumberCheck(megaSenaNumbers);
}


let meuJogo= [1,2,3,4,5,6];
let acertos = rightNumbers(megaSenaNumbers,meuJogo);

let timer = 1;
while(acertos<6) { 
  megaSenaNumbers=randomNumberGenerator(6);
  sameNumberCheck(megaSenaNumbers);
  while(sameNumberCheck(megaSenaNumbers)===true){
    megaSenaNumbers=randomNumberGenerator(6);
    sameNumberCheck(megaSenaNumbers);
  }
timer +=1;
acertos = rightNumbers(megaSenaNumbers,meuJogo);
}
console.log(megaSenaNumbers);
console.log(meuJogo);
console.log(acertos);
console.log("Tentativa : "+timer);

