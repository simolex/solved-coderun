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
    let groups = new Uint32Array(2 ** 16);

    let groupIndex = new Uint32Array(n);

    const custRand = new CustomRandom(a, b);
    // const st = Date.now();

    let hash;
    let pntRight = 0;
    for (let i = 0; i < n; i++) {
        houses[i] = custRand.nextRand32();
        hash = houses[i] >>> 16;
        groups[hash]++;
        groupIndex[i] = hash;
    }

    const medianIndex = Math.floor((n - 1) / 2);
    let sum = 0;
    let index = 0;
    let prevSum = 0;
    while (index < 2 ** 16 && sum < medianIndex) {
        prevSum = sum;
        sum += groups[index];
        index++;
    }

    console.log(groups, groupIndex, index - 1);

    const getSumDistances = (y) => {
        let sum = 0n;
        y = BigInt(y);
        for (let i = 0; i < n; i++) {
            sum += y > BigInt(houses[i]) ? y - BigInt(houses[i]) : BigInt(houses[i]) - y;
        }
        return sum.toString();
    };
    let result;

    const FindMedian = (l, r, bit) => {
        if (l == r - 1 && l === medianIndex) {
            result = houses[l];
            return;
        }
        const mask = 1 << bit;

        pntRight = l;
        for (let i = l; i < r; i++) {
            if ((houses[i] & mask) === 0) {
                if (pntRight !== i) {
                    value = houses[pntRight];
                    houses[pntRight] = houses[i];
                    houses[i] = value;
                }
                pntRight++;
            }
        }

        if (bit === 0) {
            result = houses[l];

            return;
        }

        if (medianIndex >= pntRight) {
            FindMedian(pntRight, r, bit - 1);
        } else {
            FindMedian(l, pntRight, bit - 1);
        }
    };

    FindMedian(0, n, 31);

    // console.log(pntRight, houses);

    return getSumDistances(result);
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
