
function calculoQuadrado(base,altura) {
console.log((base*altura));
console.log((2*base + 2*altura));

}
calculoQuadrado(5,8);

// Ex. 3
function aprovacaoCheck(nota){
  if(nota>=80){
    console.log("Aprovado");
  }
  else if (nota<<80 && nota>=60) {
    console.log("Lista de espera");
  }
  else {
    console.log("Reprovado");
  }
}
let nota = 78;
aprovacaoCheck(nota);
nota = 83;
aprovacaoCheck(nota);
nota = 52;
aprovacaoCheck(nota);

// Ex. 4
function aprovacaoMensagem(status) {
  switch(status) {
    case "aprovado":
      console.log("aprovado");
      break;
      
    case "reprovado":
      console.log("reprovado");
      break;
  
    case "lista" :
      console.log("lista");
      break;
  
    default :
      console.log("não definido");
      break;
  
  }
}
aprovacaoMensagem("aprovado");
aprovacaoMensagem("reprovado");
aprovacaoMensagem("lista");
aprovacaoMensagem("a");

//Ex.1
function calculos(param1,param2) {
  console.log(param1+param2);
  console.log(param1-param2);
  console.log(param1*param2);
  console.log(param1/param2);
  console.log(param1 % param2);
}
calculos(20,10);

function maior(a,b) {
  if(a>b) {
    console.log(a);
  }
  else if(b>a) {
    console.log(b);
  }
}
maior(10,9);

function maiorEntreTres(a,b,c) {
  if(a>b && a>c){
    console.log(a);
  }
  if(b>a && b>c) {
    console.log(b);
  }
  if(c>b && c>a) {
    console.log(c);
  }
}
maiorEntreTres(12,31,1);

function signalCheck(x) {
  if(x<0) {
    console.log("negative");
  }
  else if(x>0) {
    console.log("positive");
  }
  else {
    console.log("zero");
  }
}
signalCheck(-2.2);

function triangleCheck(a,b,c) {
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
}
triangleCheck(100,30,60);
triangleCheck(100,30,50);

function chessMove(move) {
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
}
chessMove("Knight");

function grade(numberGrade) {
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
}
grade(78);
grade(90);
grade(-200);

function evenNumbersCheck(a,b,c) {
  let evenNumber = a%2==0 || b%2==0 || c%2==0;
if(evenNumber) {
  console.log("even number(s)");
}
else {
  console.log("no even numbers")
}
}
evenNumbersCheck(12,13,14);

function oddNumbersCheck(a,b,c) {
  let oddNumber = a%2!=0 || b%2!=0 || c%2!=0;
if(oddNumber) {
  console.log("odd number(s)");
}
else {
  console.log("no odd numbers")
}
}
oddNumbersCheck(19,21,22);

function profitCalculator(cost,income) {
  if(cost < 0 || income < 0){
    console.log("error : values not acceptable")
  }
  cost = cost + (cost/5);
  let profit = (income - cost) * 1000;
  console.log(profit);
}
profitCalculator(5,8);

function cleanWage(wage) {
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
}
cleanWage(3000);