const fs = require('fs').promises;

fs.writeFile('./meu-arquivo.txt', 'Meu textão')
    .then(() => {
        fs.readFile('meu-arquivo.txt','utf-8')
            .then((text) => console.log(text))
            .catch((err) => console.error(err))
    })
    .catch((err) => {
        console.error(err)
    });