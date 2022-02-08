const { getNumber, getAnswer } = require('./input');
let gameGoingOn = true;

while(gameGoingOn){
const rightNumber = Math.round(Math.random() * 10);
const number = getNumber();
if(number === rightNumber) {
    console.log("Parabéns, acertou !")
}
else {
    console.log(`Errou ! O número certo era ${rightNumber} e não ${number}`)
}
const response = getAnswer();
if(response === "N") {
    gameGoingOn = false;
}
}
