const {getTempo, getDistancia} = require("./input");

const tempo = getTempo();
const distancia = getDistancia();
console.log(`Velocidade de ${distancia/tempo} m/s`);
