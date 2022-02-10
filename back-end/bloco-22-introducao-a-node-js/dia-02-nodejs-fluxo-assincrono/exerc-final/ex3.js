const fs = require('fs').promises;

const arrayOfStrings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

async function main(){
    await Promise.all(arrayOfStrings.map((str, idx) => fs.writeFile(`file${idx + 1}.txt`,str)));
    let resultString = "";
    for(let i = 0; i < arrayOfStrings.length; i ++) {
        if(i !== 0) {
            resultString += ` ${arrayOfStrings[i]}`
        }
        else {
            resultString += `${arrayOfStrings[i]}`
        }
    }
    await fs.writeFile("fileAll.txt", resultString);
}

main();