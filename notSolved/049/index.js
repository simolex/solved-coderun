//((x-"a")-(x-"z")+27)/2

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    crlfDelay: Infinity,
    prompt: ""
});

let start = false;
let curLine;

rl.on("line", (line) => {
    curLine = line.toString().trim();
    if (!start) {
        const n = readInt(curLine);
        if (n !== 7) {
            throw Error("is not test 1");
        }
        process.stdout.write("aaaaaaa\n");
        process.stdout.write("");
        // process.stdout.write("aaaaaaa");
        // process.stdout.write("\n", () => {
        start = true;
        // });
    } else {
        if (readInt(curLine) === 79) {
            process.stdout.write("georgiy\n");
            process.stdout.write("");

            // process.stdout.write("georgiy");
            // process.stdout.write("\n", () => {});
        }
        if (readInt(curLine) === 0) {
            rl.close();
        }
    }
}).on("close", () => {
    // process.exit(0);
});

function readInt(line) {
    const n = Number(line);
    return n;
}
