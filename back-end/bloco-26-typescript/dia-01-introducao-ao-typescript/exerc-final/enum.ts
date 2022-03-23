import * as readline from 'readline-sync';

enum months {
    janeiro = 1,
    fevereiro,
    marco,
    abril,
    maio,
    junho,
    julho,
    agosto,
    setembro,
    outubro,
    novembro,
    dezembro
}

enum stations {
    winter = 'Inverno',
    summer = 'Verão',
    fall = 'Outuno',
    spring = 'Primavera'
}

export const askUser = ():void => {
    const month:string = readline.question('Qual mês deseja verificar ?');
    const noOfMonth:number = months[month];
    if(noOfMonth === 1 || noOfMonth ===2) console.log(stations.summer);
    if(noOfMonth === 3) console.log(`${stations.summer} e ${stations.fall}`);
    if(noOfMonth === 4 || noOfMonth === 5) console.log(stations.fall);
    if(noOfMonth === 6) console.log(`${stations.fall} e ${stations.winter}`);
    if(noOfMonth === 7 || noOfMonth === 8) console.log(stations.winter);
    if(noOfMonth === 9) console.log(`${stations.winter} e ${stations.spring}`);
    if(noOfMonth === 10 || noOfMonth === 11) console.log(stations.spring);
    if(noOfMonth === 12) console.log(`${stations.spring} e ${stations.summer}`);

}