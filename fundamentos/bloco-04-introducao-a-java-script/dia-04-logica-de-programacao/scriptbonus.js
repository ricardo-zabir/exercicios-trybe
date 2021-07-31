let num = 253;
let divisors = 2;
let arrayDivisors = [];
for(let index=2;index<num;index +=1) {
  if(num%index ==0){
    divisors+=1
    arrayDivisors += index;
    arrayDivisors += "-";
  }
}
if(divisors>2){
  console.log("Não é primo");
}
else {
  console.log("é primo");
}
console.log(arrayDivisors);