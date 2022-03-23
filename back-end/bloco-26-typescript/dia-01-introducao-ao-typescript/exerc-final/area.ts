import * as readline from 'readline-sync'

const metrics: string[] = ['km2', 'hm2', 'dam2', 'm2', 'dm2', 'cm2', 'mm2'];
const values: number[] = [1000, 100, 10, 1, 0.1, 0.01, 0.0001];

export const exec = ():void => {
    const num: number = readline.questionFloat('Qual o valor ?');
    const base_unit: string = readline.question('Qual a unidade base ?');
    const conversion_unit: string = readline.question('Qual a unidade para conversão ?');
    const result: number = covert(num, base_unit, conversion_unit);
    console.log(`${num}${base_unit} é igual a ${result}${conversion_unit}`)
}

const covert = (valor: number, base_unit: string, conversion_unit: string): number => {
    if(!metrics.some((metric) => metric === base_unit)) {
        throw new Error('Unidade de base inválida');
    }
    if(!metrics.some((metric) => metric === conversion_unit)) {
        throw new Error('Unidade de conversão inválida');
    }
    const valueInSquareMeters: number = values[metrics.indexOf(base_unit)] * valor;
    return valueInSquareMeters / values[metrics.indexOf(conversion_unit)];
}
