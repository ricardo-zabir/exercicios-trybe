const readline = require("readline");
const fs = require("fs/promises");

async function question(msg) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return  new Promise((resolve) => {
        rl.question(msg, (ans) => {
            rl.close();
            resolve(ans)
        });
    });
}
async function main() {
    try {
        const file = await question("Qual arquivo deseja ler ?");
        const fileContent = await fs.readFile(file,'utf-8');
        const wordToBeReplaced = await question("Qual palavra deseja que seja substituída ?");
        const wordToReplace = await question("Qual palavra deseja que substitua ?");
        const updatedFile = fileContent.replace(wordToBeReplaced,wordToReplace);
        console.log(updatedFile);
        const pathOfFile = await question("Qual o nome do arquivo que deseja salvar ?");
        await fs.writeFile(pathOfFile,updatedFile);
    }
    catch(e) {
        console.log("Arquivo inexistente")
    }
}
main();