// Для чтения входных данных в Node.js необходимо использовать
// модуль readline, который работает с потоком ввода-вывода
// (stdin/stdout) и позволяет читать строки.
const readline = require("readline");

let k,
    n,
    p,
    pIndex = 0;
let gettedParams = false;

let bufferP = new ArrayBuffer(4 * p);
let pSequence = new Uint16Array(bufferP);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Данные во входном потоке могут состоять из нескольких строк.
// Чтобы прочитать их, можно использовать метод rl.on(),
// который вызывается каждый раз при появлении новой строки
// в потоке ввода.
// Чтобы вывести результат в поток вывода (stdout),
// можно использовать метод console.log().
// Пример:
// console.log('Результат:', result);

// Пример решения задачи "Вычислите сумму A+B":
rl.on("line", (line) => {
    if (!gettedParams) {
        [k, n, p] = line.split(" ").map(Number);
        bufferP = new ArrayBuffer(4 * p);
        pSequence = new Uint16Array(bufferP);
        gettedParams = true;
    } else {
        if (pIndex < p) {
            pSequence[pIndex] = +line;
            pIndex++;
        } else {
            rl.close();
        }
    }
}).on("close", () => {
    console.log(pSequence[4] + 1);
});

// module.exports = function (pass) {};
