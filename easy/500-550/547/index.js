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
        // this.mask = (1 << 32) - 1;
    }

    #nextRand24() {
        this.#cur = (((this.#cur * this.#a) % 2n ** 32n) + this.#b) % 2n ** 32n;

        return (this.#cur >> 8n) % 2n ** 32n;
    }

    nextRand32() {
        const a = this.#nextRand24();
        const b = this.#nextRand24();

        return Number((((a << 8n) ^ b) % 2n ** 32n).toString());
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

    const getSumDistances = (y) => {
        let sum = 0;
        for (let i = 0; i < n; i++) {
            sum += Math.abs(y - houses[i]);
        }
        return sum;
    };

    let l = 0;
    let r = 2 ** 32;
    let m, mM;
    let mL = getSumDistances(l);
    let mR = getSumDistances(r);

    while (l < r) {
        m = l + Math.floor((r - l) / 2);
        mM = getSumDistances(m);
        if (getSumDistances(m1) < getSumDistances(m2)) {
            r = m2 - 1;
        } else {
            l = m1 + 1;
        }
    }

    return getSumDistances(l);
}

const _readline = require("readline");

const _reader = _readline.createInterface({
    input: process.stdin,
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
