/**
 * 547. Одномерный почтальон
 */

class CustomRandom {
    #cur;
    #a;
    #b;
    constructor(a, b) {
        this.#cur = 0n;
        this.#a = BigInt(a);
        this.#b = BigInt(b);
        this.mask = 2n ** 32n;
    }

    #nextRand24() {
        this.#cur = (((this.#cur * this.#a) % this.mask) + this.#b) % this.mask;

        return (this.#cur >> 8n) % this.mask;
    }

    nextRand32() {
        const a = this.#nextRand24();
        const b = this.#nextRand24();

        return Number((((a << 8n) ^ b) % this.mask).toString());
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

    for (let i = 0; i < n; i++) {
        houses[i] = custRand.nextRand32();
    }

    // const houses = [1, 2, 2, 2, 3, 3, 4, 5];
    // n = houses.length;

    const getSumDistances = (y) => {
        let sum = 0;
        for (let i = 0; i < n; i++) {
            sum += Math.abs(y - houses[i]);
        }
        return sum;
    };

    const partition = (l, r, x) => {
        let equalPointer = l;
        let greatePointer = l;
        let newValue;
        for (let i = l; i < r; i++) {
            if (houses[i] <= x) {
                if (i !== greatePointer) {
                    newValue = houses[i];
                    houses[i] = houses[greatePointer];
                    houses[greatePointer] = newValue;
                }
                greatePointer++;
            }
            // switch (true) {
            //     case houses[i] < x:
            //         if (i !== greatePointer) {
            //             houses[i] = houses[greatePointer];
            //         }
            //         if (greatePointer !== equalPointer) {
            //             houses[greatePointer] = houses[equalPointer];
            //         }
            //         if (equalPointer !== i) {
            //             houses[equalPointer] = newValue;
            //         }
            //         greatePointer++;
            //         equalPointer++;
            //         break;
            //     case houses[i] === x:
            //         if (i !== greatePointer) {
            //             houses[i] = houses[greatePointer];
            //             houses[greatePointer] = newValue;
            //         }
            //         greatePointer++;
            //         break;
            // }
        }
        // console.log("part>>>", equalPointer, greatePointer);
        return greatePointer;
    };

    const median = Math.floor(n / 2);
    let left = 0;
    let right = n;
    let middle;

    while (right > left) {
        middle = partition(left, right, houses[left + Math.ceil((right - left) / 2)]);
        if (middle > median) {
            right = middle - 1;
        } else {
            left = middle;
        }
        // console.log(left, right, middle);
    }
    // console.log(getSumDistances(houses[left]), getSumDistances(houses[right]));
    // console.log(houses[left], houses[right]);

    // for (let i = 0; i < n; i++) {
    //     console.log(i, houses[i], getSumDistances(houses[i]));
    // }

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
