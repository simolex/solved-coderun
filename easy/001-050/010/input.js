// Для чтения входных данных в Node.js необходимо использовать
// модуль readline, который работает с потоком ввода-вывода
// (stdin/stdout) и позволяет читать строки.
const readline = require("readline");
const solution = require(".");

let gettedParams = false;
let countNails;
let nailPositions;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", (line) => {
    if (!gettedParams) {
        countNails = +line.trim();
        gettedParams = true;
    } else {
        nailPositions = line.split(" ").map(Number);
        rl.close();
    }
}).on("close", () => solution(countNails, nailPositions));
