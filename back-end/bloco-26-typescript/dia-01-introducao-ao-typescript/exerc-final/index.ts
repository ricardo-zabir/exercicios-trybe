import * as length from './length';
import * as area from './area';
import * as mass from './mass';
import * as volume from './volume';
import * as capacity from './capacity';
import * as readline from 'readline-sync';
import * as stations from './enum';

const arr = [length, area, mass, volume, capacity];

stations.askUser()
 
const script:number = readline.questionInt(`Qual conversão deseja ?
1- Comprimento
2- Area
3- Massa
4- Volume
5- Capacidade`);

arr[script - 1].exec()