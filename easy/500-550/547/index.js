/**
 * 547. Одномерный почтальон
 */

class CustomRandom {
    #buffer;
    constructor(a, b) {
        this.#buffer = new Uint32Array(6);
        // this.#buffer[0] = 0;
        this.#buffer[1] = a;
        this.#buffer[2] = b;
        this.reset();
    }

    reset() {
        this.#buffer[0] = 0;
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

        return this.#buffer[3] >>> 0;
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
    let groups = new Uint32Array(2 ** 16);

    // let groupIndex = new Uint32Array(n);

    const custRand = new CustomRandom(a, b);

    let hash;
    for (let i = 0; i < n; i++) {
        houses[i] = custRand.nextRand32() >>> 0;
        hash = houses[i] >>> 16;
        groups[hash]++;
    }

    const medianIndex = ((n - 1) / 2) ^ 0;
    let sum = 0;
    let index = 0;
    for (let i = 0; i < 2 ** 16; i++) {
        if (sum + groups[i] > medianIndex) {
            index = i;
            break;
        }
        sum += groups[i];
    }

    const relativeMedian = medianIndex - sum;
    const sizeSubGroup = groups[index];
    const relativeHouses = new Uint32Array(sizeSubGroup);

    let subIndex = 0;
    custRand.reset();

    for (let i = 0; i < n; i++) {
        hash = houses[i] >>> 16;
        if (hash === index) {
            relativeHouses[subIndex] = houses[i] >>> 0;
            subIndex++;
        }
    }

    const getSumDistances = (y) => {
        let sum = 0n;
        let count = n >>> 20;
        let range = 2 ** 20;
        let nextRange;
        let sumImmediate;
        for (let b = 0; b < count; b++) {
            sumImmediate = 0;
            nextRange = (b + 1) * range;
            for (let i = b * range; i < nextRange; i++) {
                sumImmediate += y > houses[i] ? (y - houses[i]) >>> 0 : (houses[i] - y) >>> 0;
            }
            sum += BigInt(sumImmediate);
        }

        sumImmediate = 0;
        for (let i = count * range; i < n; i++) {
            sumImmediate += y > houses[i] ? (y - houses[i]) >>> 0 : (houses[i] - y) >>> 0;
        }
        sum += BigInt(sumImmediate);

        return sum;
    };

    delete groups;
    // delete groupIndex;

    relativeHouses.sort();
    let median = relativeHouses[relativeMedian];

    let result = getSumDistances(median);

    return result.toString();
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
