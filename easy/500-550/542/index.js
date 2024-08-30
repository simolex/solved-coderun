/**
 * 542. Нужно больше конфет!
 */

function sweetsWanted(sweets) {
    let result = 0;
    const prefix = [0];
    const sweetCount = sweets.length;

    if (sweetCount > 2) {
        sweets.sort((a, b) => a - b);
        sweets.forEach((s, i) => {
            prefix.push(prefix[i] + s);
        });
        result = Infinity;

        const maxSweets = sweets[sweets.length - 1];
        const maxRightPrefix = prefix[prefix.length - 1];

        let currentLeft;
        let needFromLeft, needFromRight;
        for (let i = 1; i < sweetCount; i++) {
            currentLeft = prefix[i] - prefix[i - 1];

            needFromLeft = currentLeft * i - prefix[i];
            needFromRight = maxSweets * (sweetCount - i) + prefix[i] - maxRightPrefix;

            result = Math.min(result, needFromLeft + needFromRight);
        }
    }

    return result;
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

    const sweets = readArray();
    const result = sweetsWanted(sweets);

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

module.exports = sweetsWanted;
