import * as readline from 'readline-sync'
const metrics: string[] = ['km3', 'hm3', 'dam3', 'm3', 'dm3', 'cm3', 'mm3'];
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
    const valueInCubicMeters: number = values[metrics.indexOf(base_unit)] * valor;
    return valueInCubicMeters / values[metrics.indexOf(conversion_unit)];
}
