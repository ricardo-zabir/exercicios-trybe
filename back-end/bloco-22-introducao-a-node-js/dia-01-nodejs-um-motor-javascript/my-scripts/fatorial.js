const { getFactNum } = require('./input');

const factNum = getFactNum();

const factorial = (fact) => {
    let result = 1
    while(fact != 1) {
        result *= fact;
        fact -= 1;
    }
    return result;
}

console.log(`resultado: ${factorial(factNum)}`);