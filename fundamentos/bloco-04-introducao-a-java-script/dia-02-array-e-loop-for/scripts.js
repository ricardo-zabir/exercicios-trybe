let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
tasksList.push('Fazer exercícios da Trybe');
console.log(tasksList);
tasksList.unshift('Desligar alarme');
console.log(tasksList);
tasksList.pop();
console.log(tasksList);
tasksList.shift();
console.log(tasksList);
console.log(tasksList.indexOf('Reunião'));

// Exercício fixação

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);


let indexOfPortfolio = menu.indexOf('Portfólio') ;

console.log(indexOfPortfolio);

menu.push('Contato');
console.log(menu);

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for(let index = 0; index<groceryList.length;index +=1) {
  console.log(groceryList[index]);
}

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for(let name of names) {
  console.log(name);
}
// Aula ao vivo

let megaSenaNumbers = [];
for(index=0;index<6;index +=1)
{
  megaSenaNumbers.push(Math.floor(Math.random()*60 + 1))
}
let myPlay = [2, 10, 12, 22, 32, 48];
let cont =0;
for(index=0;index<myPlay.length;index +=1)  {
  for(let index2=0;index2<megaSenaNumbers.length;index2+=1){
   if (myPlay[index] == megaSenaNumbers[index2]){ cont ++}
  }
}
console.log(cont);
console.log(megaSenaNumbers);
console.log(myPlay);