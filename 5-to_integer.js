const userArg = process.argv[2];
let number = Number(userArg);

if (Number.isNaN(number)) {
    console.log(`Not a number`);
} else {
    console.log(`My number: ${Math.trunc(number)}`);
}
