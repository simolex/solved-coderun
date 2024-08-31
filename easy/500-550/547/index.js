/**
 * 547. Одномерный почтальон
 */

class CustomRandom {
    #cur;
    #a;
    #b;
    constructor(a, b) {
        this.#cur = new Uint32Array(1).fill(0);
        this.#a = new Uint32Array(2).fill(a);
        this.#b = new Uint32Array(2).fill(b);
    }

    #nextRand24() {
        this.#cur[0] = this.#cur[0] * this.#a[0] + this.#b[0];

        return this.#cur[0] >> 8;
    }

    nextRand32() {
        this.#a[1] = this.#nextRand24();
        this.#b[1] = this.#nextRand24();

        return (this.#a[1] << 8) ^ this.#b[1];
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
    const houses = new Uint32Array(n);
    const custRand = new CustomRandom(a, b);

    for (let i = 0; i < n; i++) {
        houses[i] = custRand.nextRand32();
    }
    houses.sort((a, b) => a - b);

    const getSumDistances = (y) => {
        let sum = 0;
        for (let i = 0; i < n; i++) {
            sum += Math.abs(houses[i] - y);
        }
        return sum;
    };

    let l = 0;
    let r = 2 ** 32;
    let m1, m2;

    while (l < r) {
        m1 = l + Math.floor((r - l) / 3);
        m2 = r - Math.floor((r - l) / 3);
        if (getSumDistances(m1) <= getSumDistances(m2)) {
            r = m2 - 1;
        } else {
            l = m1 + 1;
        }
    }
    console.log(houses);
    console.log(l, r, getSumDistances(r - 2), getSumDistances(r + 1), getSumDistances(r + 2));
    return getSumDistances(r);
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
