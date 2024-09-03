/**
 * 547. Одномерный почтальон
 */

class CustomRandom {
    #buffer;
    constructor(a, b) {
        this.#buffer = new Uint32Array(6);
        this.#buffer[0] = 0;
        this.#buffer[1] = a;
        this.#buffer[2] = b;
    }

    #nextRand24() {
        this.#buffer[0] *= this.#buffer[1];
        this.#buffer[0] += this.#buffer[2];
        return this.#buffer[0] >>> 8;
    }

    nextRand32() {
        this.#buffer[4] = this.#nextRand24();
        this.#buffer[5] = this.#nextRand24();
        this.#buffer[3] = (this.#buffer[4] << 8) ^ this.#buffer[5];

        return this.#buffer[3] & 0xffffffff;
    }
}

// unsigned int cur = 0; // беззнаковое 32-битное число
// unsigned int nextRand24() {
//     cur = cur * a + b; // вычисляется с переполнениями
//     return cur >> 8; // число от 0 до 2**24-1.
// }
// unsigned int nextRand32() {
//     unsigned int a = nextRand24(), b = nextRand24();
//     return (a << 8) ^ b; // число от 0 до 2**32-1.
// }

function linearPostman(n, a, b) {
    let houses = new Uint32Array(n);
    const custRand = new CustomRandom(a, b);
    // const st = Date.now();
    for (let i = 0; i < n; i++) {
        houses[i] = custRand.nextRand32();
        // houses[i] < 0 ? console.log(houses[i]) : null;
    }
    // console.log(Date.now() - st);
    // const s2 = Date.now();

    // const houses = [1, 2, 2, 2, 3, 3, 4, 5];
    // n = houses.length;

    const getSumDistances = (y) => {
        let sum = 0n;
        y = BigInt(y);
        for (let i = 0; i < n; i++) {
            sum += y > BigInt(houses[i]) ? y - BigInt(houses[i]) : BigInt(houses[i]) - y;
        }
        return sum.toString();
    };

    const partition = (l, r, x) => {
        let equalPointer = l;
        let greatePointer = l;
        let newValue;
        for (let i = l; i < r; i++) {
            newValue = houses[i];
            switch (true) {
                case houses[i] < x:
                    if (i !== greatePointer) {
                        houses[i] = houses[greatePointer];
                    }
                    if (greatePointer !== equalPointer) {
                        houses[greatePointer] = houses[equalPointer];
                    }
                    if (equalPointer !== i) {
                        houses[equalPointer] = newValue;
                    }
                    greatePointer++;
                    equalPointer++;
                    break;
                case houses[i] === x:
                    if (i !== greatePointer) {
                        houses[i] = houses[greatePointer];
                        houses[greatePointer] = newValue;
                    }
                    greatePointer++;
                    break;
            }
        }
        // console.log("part>>>", equalPointer, greatePointer);
        return { equalPointer, greatePointer };
    };

    // console.log(houses);

    const median = Math.floor(n / 2);
    let left = 0;
    let right = n;
    let select;

    while (right > left) {
        select = partition(left, right, houses[left]);
        // console.log(select);
        // console.log(left, right, select);
        if (select.equalPointer <= median && median < select.greatePointer) {
            left = select.equalPointer;
            break;
        }
        if (houses[right - 1] === houses[left]) {
            left = select.equalPointer;
            break;
        }

        if (select.greatePointer <= median) {
            left = select.greatePointer + 1;
        } else if (select.equalPointer >= median) {
            right = select.equalPointer;
        }
    }

    // console.log(houses);

    // console.log(getSumDistances(houses[left]), getSumDistances(houses[right]));
    // console.log(houses[left], houses[right]);

    // for (let i = 0; i < n; i++) {
    //     console.log(i, houses[i], getSumDistances(houses[i]));
    // }
    // console.log(Date.now() - s2);
    return getSumDistances(houses[left]);
}

const _readline = require("readline");

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

_reader.on("line", (line) => {
    _inputLines.push(line);
});

process.stdin.on("end", solve);

function solve() {
    const n = readInt();
    const params = readArray();
    const a = params[0];
    const b = params[1];

    const result = linearPostman(n, a, b);

    console.log(result);
}

function readAllString() {
    var arr = _inputLines.map((line) => line.trim());

    return arr;
}

function readString() {
    var str = _inputLines[_curLine].trim(" ");
    _curLine++;
    return str;
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}
function readBigInt() {
    const n = BigInt(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readArray() {
    var arr = _inputLines[_curLine]
        .trim(" ")
        .split(" ")
        .filter((str) => str && str.length > 0)
        .map((num) => Number(num));
    _curLine++;
    return arr;
}

function readBigIntArray() {
    var arr = _inputLines[_curLine]
        .trim(" ")
        .split(" ")
        .map((num) => BigInt(num));
    _curLine++;
    return arr;
}

function readStringArray() {
    var arr = _inputLines[_curLine]
        .trim(" ")
        .split(" ")
        .filter((str) => str && str.length > 0);
    _curLine++;
    return arr;
}

function readEdges(n) {
    let grid = [];
    for (let i = 0; i < n; i++) {
        let vertex = readArray();
        grid.push(vertex);
    }
    return grid;
}

module.exports = linearPostman;
