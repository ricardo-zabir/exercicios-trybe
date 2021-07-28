
let a = 20;
let b = 32;
// Programa 1
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

// Programa 2
a = 12;
b = 133;
if(a>b) {
  console.log(a);
}
else if(b>a) {
  console.log(b);
}

// Programa 3
a = 3;
b = 22;
c = 14;
if(a>b && a>c){
  console.log(a);
}
if(b>a && b>c) {
  console.log(b);
}
if(c>b && c>a) {
  console.log(c);
}

// Programa 4
a = -14;
if(a<0) {
  console.log("negative");
}
else if(a>0) {
  console.log("positive");
}
else {
  console.log("zero");
}
 
// Programa 5
a = 50;
b = 30;
c = 100;
if(a<=0){
  console.log("Erro : ângulo inválido")
}
if(b<=0){
  console.log("Erro : ângulo inválido")
}
if(c<=0){
  console.log("Erro : ângulo inválido")
}
let triangle = a+b+c==180
if(triangle) {
  
  console.log("true");
}
else {
  console.log("false");
}

// Programa 6
let move = "Knight";
let lowerCaseMove = move.toLowerCase();

switch(lowerCaseMove) {
  case "king" :
    console.log("any (1 block)");
    break;
  case "queen" :
    console.log("any (n blocks)");
    break;
  case "rook" :
    console.log("horizontal/vertical (n blocks)");
    break;
  case "knight" :
    console.log("L-shape (3 blocks)");
    break;
  case "bishop" :
    console.log("diagonals (n blocks)");
    break;
  case "pawn" :
    console.log("forward (1 block)");
    break;
  default :
  console.log("Error : piece doesn't exist");
}

// Programa 7
let numberGrade = 78;
let grade;
if(numberGrade>=90 && numberGrade<=100) {
  grade = "A";
}
else if(numberGrade<90 && numberGrade>=80) {
  grade = "B";
}
else if(numberGrade<80 && numberGrade>=70) {
  grade = "C";
}
else if(numberGrade<70 && numberGrade>=60) {
  grade = "D";
}
else if(numberGrade<60 && numberGrade>=50) {
  grade = "E";
}
else if(numberGrade<50 && numberGrade>=0) {
  grade = "C";
}
else {
  grade = null;
}
if(grade != null) {
  console.log(grade);
}
else {
  console.log("error : grade can't be processed");
}

// Programa 8
let firstNumber = 3;
let secondNumber = 7 ;
let thirdNumber = 10 ;
let evenNumber = firstNumber%2==0 || secondNumber%2==0 || thirdNumber%2==0;
if(evenNumber) {
  console.log("even number(s)");
}
else {
  console.log("no even numbers")
}

// Programa 9
firstNumber = 8;
secondNumber = 6 ;
thirdNumber = 9 ;
let oddNumber = firstNumber%2!=0 || secondNumber%2!=0 || thirdNumber%2!=0;
if(oddNumber) {
  console.log("odd number(s)");
}
else {
  console.log("no odd numbers")
}

// Programa 10
let cost;
let income;
if(cost < 0 || income < 0){
  console.log("error : values not acceptable")
}
cost = cost + (cost/5);
let profit = (income - cost) * 1000;
console.log(profit); 

// Programa 11
let wage = 3000;
if (wage<=1556.94) {
  wage = wage - (wage*0.08);
}
else if (wage>1556.94 && wage<=2594.92) {
  wage = wage - (wage*0.09);
}
else if (wage>2594.92 && wage<=5189.82) {
  wage = wage - (wage*0.11);
}
else if (wage>5189.82) {
  wage = wage - 570.88;
}

if (wage>1903.98 && wage<=2826.65) {
  wage = wage - ((wage*0.075) - 142.80) ;
}
else if (wage>2826.65 && wage<=3751.05) {
  wage = wage - ((wage*0.15) - 354.80) ;
}
else if (wage>3751.05 && wage<=4664.68) {
  wage = wage - ((wage*0.225) - 636.13) ;
}
else if (wage>4664.68) {
  wage = wage - ((wage*0.275) - 869.36);
}
console.log(wage);

