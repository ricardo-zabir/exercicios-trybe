const { getFiboNum } = require("./input");

const number = getFiboNum();

const fibonacciSequence = [0,1];

for(let i =1; i < number + 1; i ++) {
    console.log(fibonacciSequence[i]);
    fibonacciSequence.push(fibonacciSequence[i] + fibonacciSequence[i-1])
}