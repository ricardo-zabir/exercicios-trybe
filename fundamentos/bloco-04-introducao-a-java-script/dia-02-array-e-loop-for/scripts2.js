// Ex. 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let i = 0;i<numbers.length;i +=1) {
  console.log(numbers[i]);
}
// Ex. 2
let soma = 0;
for (i =0 ;i<numbers.length;i+=1) {
  soma += numbers[i];
}
console.log(soma);
// Ex. 3
let media = soma/numbers.length;
console.log(media);
// Ex. 4
if(media>20){
  console.log("Valor maior que 20");
}
else {
  console.log("Valor menor ou igual 20");
}
// Ex. 5
let biggestNum = 0;
for(i=0;i<numbers.length;i+=1) {
  if(numbers[i]>biggestNum) {
    biggestNum=numbers[i];
  }
}
console.log(biggestNum);
// Ex. 6

let oddNumbers = 0;
for(i=0;i<numbers.length;i+=1) {
  if(numbers[i]%2 == 1) {
    oddNumbers +=1
  }
}
if(oddNumbers==0) {
  console.log("No odd numbers");
}
else {
  console.log(oddNumbers);
}
// Ex. 7
let smallestNum=numbers[0];
for(i=1;i<numbers.length;i+=1) {
  if(numbers[i]<smallestNum) {
    smallestNum = numbers[i];
  }
}
console.log(smallestNum);
// Ex. 8
let arrayTwentyFive = [];
for(i=1;i<26;i+=1) {
  arrayTwentyFive.push(i);
}
for(i=0;i<arrayTwentyFive.length;i+=1) {
  console.log(arrayTwentyFive[i]);
}
// Ex. 9
let arrayDividedByTwo = [];
for(i=0;i<arrayTwentyFive.length;i+=1) {
  arrayDividedByTwo.push(arrayTwentyFive[i]/2);
}
for(i=0;i<arrayDividedByTwo.length;i+=1) {
  console.log(arrayDividedByTwo[i]);
}


