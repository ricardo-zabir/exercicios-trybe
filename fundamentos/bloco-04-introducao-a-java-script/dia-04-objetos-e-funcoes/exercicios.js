// Ex. 1
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
console.log("Bem-vinda, "+ info.personagem);

//Ex. 2
info.recorrente = "Sim";
console.log(info);

//Ex. 3
for(let key in info) {
  console.log(key);
}

// Ex. 4
for(let key in info) {
  console.log(info[key]);
}

//Ex. 5
let info2 = {
personagem: 'Tio Patinhas' , 
origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178" ,
nota: 'O último MacPatinhas' ,
recorrente: 'Sim'
}

for(let key in info){
  if(key==='recorrente'){if(info[key]===info2[key]){console.log("Ambos recorrentes")}}
  else {
  console.log(info[key]+" e "+info2[key]); }
}

// Exercício funções

//Ex.1
function verificaPalindromo(string) {
let ordem = 0;
let invOrdem = string.length -1;
let cont=0;
for(let index=0;index<string.length/2;index+=1){
  if(string[ordem]===string[invOrdem]){cont+=1}
ordem +=1;
invOrdem -=1;
}
if(cont===Math.round(string.length/2)){return true;}
else{return false;}
}
console.log(verificaPalindromo("arara"));
console.log(verificaPalindromo("desenvolvimento"));

//Ex. 2
function biggestIndex(array) { let biggestNum = array[0];
  let biggestIndex = 0;
  for(let index=1;index<array.length;index+=1) {
if(array[index]>biggestNum){
  biggestIndex=index;
}
  }
return biggestIndex;
}

console.log(biggestIndex([2,3,6,7,10,1]));

// Ex. 3
function lowestIndex(array) {
  let lowestNum = array[0];
  let lowestIndex = 0;
  for(let index=1;index<array.length;index+=1) {
if(array[index]<lowestNum){
  lowestIndex=index;
}
  }
return lowestIndex;
}
console.log(lowestIndex([2,4,6,7,10,0,-3]));

// Ex. 4
function biggestName(array) {
  let biggestName = array[0];
  let biggestIndex = 0;
  for(let index=1;index<array.length;index+=1) {
    if(array[index].length>biggestName.length){
      biggestName=array[index];
    }
  }
  return biggestName;
}
console.log(biggestName(["José","Lucas","Nádia","Fernanda","Cairo","Joana"]));

//Ex.5
function mostRepetitiveNum(numbersArray) {
  let cont =0;
  let biggestCount = 0;
  let numWthBiggestCount = null;
  for(let index=0;index<numbersArray.length;index+=1){
    for(let superIndex=0;superIndex<numbersArray.length;superIndex+=1){
      if(numbersArray[index]===numbersArray[superIndex]){cont +=1;}
    }
  if(cont>biggestCount){biggestCount=cont;numWthBiggestCount=numbersArray[index];}
  cont = 0;
  }
  return numWthBiggestCount;
}
console.log(mostRepetitiveNum([2,3,2,5,8,2,3]));

//Ex. 6
function sum(num) { let sum =0;
  for(let index=0;index<=num;index+=1) {
    sum += index;
  }
  return sum;
}
console.log(sum(5));

// Ex. 7
function wordEnding(word,ending) { let same = true;
  let superIndex = word.length -1;
  for(let index=ending.length-1;index>=0;index-=1){
      if(ending[index]!=word[superIndex]){same=false;}
    superIndex -=1;
    }
  
  
  return same;
}
console.log(wordEnding("Trybe","be"));
console.log(wordEnding("joão fernando","fernan"));
