let num = 119;
let divisors = 2;
for(let index=2;index<num;index +=1) {
  if(num%index ==0){
    divisors+=1
  }
}
if(divisors>2){
  console.log("Não é primo");
}
else {
  console.log("é primo");
}