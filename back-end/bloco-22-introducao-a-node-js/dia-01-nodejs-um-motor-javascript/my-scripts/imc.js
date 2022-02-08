const { getPeso ,getAltura } = require("./input");
const calculateIMC = (peso,altura) => {
    return (peso / (Math.pow(altura,2))).toFixed(2);
}
const checkCategory = (imc) => {
    if(imc < 18.5) {
        return "Abaixo do peso (magreza)"
    }
    else if(imc < 24.9) {
        return "Peso Normal"
    }
    else if(imc < 29.9) {
        return "Acima do Peso"
    }
    else if(imc < 34.9) {
        return "Obesidade grau I"
    }
    else if(imc < 39.9) {
        return "Obesidade grau II"
    }
    else {
        return "Obesidade grau III e IV"
    }
}
const userIMC = calculateIMC(getPeso(),getAltura())
console.log(userIMC);
console.log(checkCategory(userIMC));

