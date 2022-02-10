// console.log("Hello World");
const readline = require("readline-sync");
const name = readline.question("Qual seu nome ?");
const age = readline.questionInt("Qual sua idade ? ");
console.log(`Hello ${name}, you are ${age} years old`);