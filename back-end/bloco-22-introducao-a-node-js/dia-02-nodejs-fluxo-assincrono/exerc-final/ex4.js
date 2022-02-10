const readline = require("readline");
const fs = require("fs/promises");
async function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    const file = await new Promise((resolve) => {
        rl.question("Qual arquivo deseja ler ?", (ans) => {
            rl.close();
            resolve(ans)
        });
    });
    try {
        const theFile = await fs.readFile(file,"utf-8");
        console.log(theFile);
    }
    catch(e) {
        console.log("Arquivo inexistente")
    }
}
main();