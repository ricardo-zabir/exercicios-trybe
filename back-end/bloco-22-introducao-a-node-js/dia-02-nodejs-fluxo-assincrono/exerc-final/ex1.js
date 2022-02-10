async function function_name (param1,param2,param3) {
    if(typeof param1 !== "number" || 
    typeof param2 !== "number" ||
    typeof param3 !== "number") {
        throw new Error("Informe apenas números");
    }
    const result = (param1 + param2) * param3;
    if(result < 50) {
        throw new Error("Valor muito baixo");
    }
    return result;
}


async function main() {
    const rng1 = Math.floor(Math.random() * 100 + 1);
    const rng2 = Math.floor(Math.random() * 100 + 1);
    const rng3 = Math.floor(Math.random() * 100 + 1);
    try {
        const result = await function_name(rng1,rng2,rng3);
        console.log(result);
    }
    catch(e) {
        console.log(e.message);
    }
}

main();