const fs = require('fs/promises');

function leArquivo(fileName) {
    try {
       const content = fs.readFile(fileName,'utf8');
       return content;
    }
    catch(e) {
        return null;
    }
}

module.exports = leArquivo;