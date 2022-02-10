async function foobar(num) {
    if(num % 5 !== 0 && num % 3 !== 0) {
        throw new Error(num);
    }
    if(num % 5 === 0 && num % 3 !== 0) {
        return "Fizz"
    }
    if(num % 5 !== 0 && num % 3 === 0) {
        return "Buzz"
    }
    return "FizzBuzz"
}

async function main() {
    try {
        console.log(await foobar(3));
        console.log(await foobar(5));
        console.log(await foobar(15));
        console.log(await foobar(2));
    }
    catch (e) {
        console.log(e.message);
    }
}

main();