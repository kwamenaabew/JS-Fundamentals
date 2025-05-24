const argv = process.argv[2];
const size = Number(argv);  // convert string to number
const str = "X";

if (Number.isNaN(size)) {
    console.log("Missing size");
} else {
    let i = 0;
    while (i < size) {
        let line = "";
        for(let i = 1; i <= size; i++) {
            line += str;
        }
        console.log(line);
        i += 1;
    }
}
