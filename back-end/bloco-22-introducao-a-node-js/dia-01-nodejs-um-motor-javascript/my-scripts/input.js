const readLine = require('readline-sync');

const getPeso = () => readLine.questionFloat("Qual seu peso em KGs ?");
const getAltura =  () => readLine.questionFloat("Qual sua altura em metros ?");
const getDistancia = () => readLine.questionInt("Qual foi a distância em metros ?");
const getTempo = () => readLine.questionInt("Quanto tempo levou em segundos?");
const getNumber = () => {
    let number = -1;
    while(number < 0 || number > 10) {
       number = readLine.questionInt("Qual número de 0 a 10 você acha que foi sorteado ?");
    }
    return number;
}
const getAnswer = () => readLine.question("Deseja continuar jogando ? S para sim e N para não ");
const getScript = () => readLine.questionInt(`Que script você deseja que rode ?
1- IMC
2- Velocidade
3- Sorteio
4- Fatorial
5- Fibonacci `);
const getFactNum = () => {
    let factNum = -1;
    while(factNum <= 0) {
       factNum = readLine.questionInt("Qual número você deseja saber o fatorial ? ")
    }
    return factNum;
}
const getFiboNum = () => {
    let fiboNum = -1;
    while(fiboNum <= 0) {
       fiboNum = readLine.questionInt("Quantos números você deseja que sejam mostrados da série Fibonacci ? ")
    }
    return fiboNum;
}
module.exports = {
    getPeso,
    getAltura,
    getDistancia,
    getTempo,
    getNumber,
    getAnswer,
    getScript,
    getFactNum,
    getFiboNum
}