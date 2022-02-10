const fs = require('fs').promises;

async function getSimpsonById(id) {
    const simpsonsData = JSON.parse(await fs.readFile("simpsons.json","utf-8"));
    if (simpsonsData[id] === undefined) {
        throw new Error("id não encontrado");
    }
    return simpsonsData[id];
}

async function removeChar() {
    const simpsonsData = JSON.parse(await fs.readFile("simpsons.json","utf-8"));
    const newData = simpsonsData.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
    await fs.writeFile('simpsons.json',JSON.stringify(newData));
    console.log(await fs.readFile('simpsons.json','utf-8'));
}


async function createSimpsonFamily() {
    const simpsonsData = JSON.parse(await fs.readFile("simpsons.json","utf-8"));
    const simpsonFamily = simpsonsData.filter((simpson) => simpson.id === "1" || simpson.id === "4");
    await fs.writeFile('simpsonsFamily.json',JSON.stringify(simpsonFamily));
}
async function addChar(char) {
    const familySmp = JSON.parse(await fs.readFile("simpsonsFamily.json","utf-8"));
    familySmp.push(char);
    await fs.writeFile("simpsonsFamily.json",JSON.stringify(familySmp));
}

async function replaceChar(oldChar,newChar) {
    const familySmp = JSON.parse(await fs.readFile("simpsonsFamily.json","utf-8"));
    const wthoutOld = familySmp.filter((simpson) => simpson.id !== oldChar.id);
    wthoutOld.push(newChar);
    await fs.writeFile("simpsonsFamily.json", JSON.stringify(wthoutOld));
}

async function main() {
    const simpsonsData = JSON.parse(await fs.readFile("simpsons.json","utf-8"));
    simpsonsData.map((simpson) => console.log(`${simpson.id} - ${simpson.name}`));
    try {
        const infoOf2 = await getSimpsonById(2);
        console.log(infoOf2);
    }
    catch(e) {
        console.log(e.message);
    }
    await removeChar();
    await createSimpsonFamily();
    await addChar(simpsonsData.filter((simpson) => simpson.name === "Nelson Muntz"));
    await replaceChar(simpsonsData.filter((simpson) => simpson.name === "Nelson Muntz"),simpsonsData.filter((simpson) => simpson.name === "Maggie Simpson"));
}


main();