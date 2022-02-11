const fs = require('fs/promises');
const posOrNeg = (num) => {
    if(typeof num !== 'number') {
        throw new Error('o valor deve ser um número');
    }
    if(num > 0) {
        return 'Positivo';
    }
    if(num < 0) {
        return 'Negativo';
    }
    return 'Neutro';
};

const writeOnFile = async (fileName,fileContent) => {
    await fs.writeFile(fileName,fileContent);
    return 'ok' ;
}

module.exports = {
    posOrNeg,
    writeOnFile,
}