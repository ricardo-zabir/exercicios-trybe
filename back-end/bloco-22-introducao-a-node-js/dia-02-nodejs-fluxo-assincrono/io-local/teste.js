const fs = require('fs').promises;

fs.readFile('meu-arquivo.txt','utf-8')
.then((data) => {
    fs.writeFile('meu-arquivo.txt',`${data}, meu textinho`)
})
.catch((err) => {
    console.error(err)
})