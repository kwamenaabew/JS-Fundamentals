const argv = process.argv[2];
const str = "C is fun";

if (Number.isNaN(argv)) {
    console.log("Missing number of occurrences");
} else {
    let i = 0;
    while (i < argv) {
        console.log(str);
        i += 1;
    }
}
