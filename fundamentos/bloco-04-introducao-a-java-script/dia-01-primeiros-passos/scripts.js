// Ex . 1
const myName = "Ricardo";
const birthCity = "Porto Alegre";
let birthYear = 2001;
console.log(myName,birthCity,birthYear);
birthYear = 2030;
console.log(birthYear);
console.log(3 ** 2);
console.log(2 ** 3);

// Ex. 2

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log (typeof patientAge);
patientId = "50";
console.log(typeof patientId);

let base = 5;
let altura = 8;
let area = altura * base;
let perimetro = 2*base + 2* altura;
console.log(area);
console.log(perimetro);

// Ex. 3
let nota = 78;
if(nota>=80){
  console.log("Aprovado");
}
else if (nota<<80 && nota>=60) {
  console.log("Lista de espera");
}
else {
  console.log("Reprovado");
}
nota = 83;
if(nota>=80){
  console.log("Aprovado");
}
else if (nota<<80 && nota>=60) {
  console.log("Lista de espera");
}
else {
  console.log("Reprovado");
}
nota = 52;
if(nota>=80){
  console.log("Aprovado");
}
else if (nota<<80 && nota>=60) {
  console.log("Lista de espera");
}
else {
  console.log("Reprovado");
}

// Ex. 4
let aprovacao;
switch(aprovacao) {
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

aprovacao= "aprovado"
switch(aprovacao) {
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

 aprovacao = "reprovado";
switch(aprovacao) {
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
aprovacao = "lista";
switch(aprovacao) {
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
