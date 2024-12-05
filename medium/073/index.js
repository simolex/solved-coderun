/**
 * 73. Система линейных уравнений - 2
 */

function equationSystem(a, b, c, d, e, f) {
    // a , b , c
    // d , e , f
    const result = [];
    const D = a * d - b * c;
    const Dx = e * d - f * b;
    const Dy = f * a - e * c;

    if (D !== 0) {
        return [2, Dx / D, Dy / D];
    } else if (Dx !== 0 || Dy !== 0) {
        return [0];
    } else if (a !== 0 && b !== 0 && c !== 0 && d !== 0) {
        const k = -a / b;
        const B = e / b;
        return [1, k, B];
    } else if (a === 0 && b === 0 && c === 0 && d === 0) {
        if (e !== 0 || f !== 0) {
            return [0];
        } else {
            return [5];
        }
    } else if (a === 0 && c === 0) {
        return b === 0 ? [4, f / d] : [4, e / b];
    } else if (b === 0 && d === 0) {
        return a === 0 ? [3, f / c] : [3, e / a];
    } else if (c === 0 && d === 0) {
        const k = -a / b;
        const B = e / b;
        return [1, k, B];
    } else if (a === 0 && b === 0) {
        const k = -c / d;
        const B = f / d;
        return [1, k, B];
    }
    return [0];
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
    const numbers = [];

    for (let i = 0; i < 6; i++) {
        numbers.push(readInt());
    }

    const result = equationSystem(...numbers);

    console.log(result.join(" "));
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

module.exports = equationSystem;
