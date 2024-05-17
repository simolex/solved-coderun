/**
 * 36. Распил брусьев
 */

function cutting(L, cuts) {
    const dp = new Map();
    cuts.push(L);
    cuts.unshift(0);

    const cut = function (L, R) {
        const hash = JSON.stringify(L + "~" + R);
        if (dp.has(hash)) {
            const r = dp.get(hash);
            return r;
        }

        let weight = cuts[R] - cuts[L];
        let min = Number.POSITIVE_INFINITY;
        let res;
        for (let i = L + 1; i < R; i++) {
            res = cut(L, i) + cut(i, R);
            if (res < min) {
                min = res;
            }
        }

        weight = weight + (L + 1 < R ? min : 0);

        dp.set(hash, weight);
        return weight;
    };
    // const result = ;
    return cut(0, cuts.length - 1) - L;
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
    const params = readArray();
    const L = params[0];
    const n = params[1];
    const cuts = readArray();

    const result = cutting(L, cuts);

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

module.exports = cutting;
