// Для чтения входных данных в Node.js необходимо использовать
// модуль readline, который работает с потоком ввода-вывода
// (stdin/stdout) и позволяет читать строки.
const readline = require("readline");

let k,
    n,
    p,
    pIndex = 0;
let gettedParams = false;

let bufferP;
let pSequence;

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
        [n, k, p] = line.split(" ").map(Number);
        bufferP = new ArrayBuffer(4 * p);
        pSequence = new Uint32Array(bufferP);
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
    let countOperation = 0;
    const carInPlay = new Set();
    const newCars = new Set();
    const oldCars = new Set();
    for (let i = 0; i < pSequence.length; i++) {
        if (carInPlay.size < k) {
            if (!carInPlay.has(pSequence[i])) {
                carInPlay.add(pSequence[i]);
                countOperation++;
            }
        } else {
            for (let j = i; j < pSequence.length && k - oldCars.size > newCars.size; j++) {
                if (carInPlay.has(pSequence[j])) {
                    oldCars.add(pSequence[j]);
                } else {
                    newCars.add(pSequence[j]);
                }
                i = j;
            }
            if (oldCars.size > 0) {
                for (const car of carInPlay.values()) {
                    if (!oldCars.has(car)) {
                        carInPlay.delete(car);
                    }
                }
            } else {
                carInPlay.clear();
            }
            for (const car of newCars.values()) {
                carInPlay.add(car);
                countOperation++;
            }
            newCars.clear();
            oldCars.clear();
        }
    }
    console.log(countOperation);
});
