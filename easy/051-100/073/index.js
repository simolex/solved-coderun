/**
 * 73. Система линейных уравнений - 2
 */

function equationSystem(a, b, c, d, e, f) {
    const result = [];
    const D = a * d - b * c;
    const Dx = e * d - f * b;
    const Dy = f * a - e * c;
    const zeroFirst = a === b && a === 0 && e !== 0;
    const zeroSecond = c === d && c === 0 && f !== 0;

    const L = [];
    const U = [];

    for (let k = 0; k < 2; k++) {
        L[k] = Array(2).fill(0);
        U[k] = Array(2);
    }
    U[0][0] = a;
    U[0][1] = b;
    U[1][0] = c;
    U[1][1] = d;

    console.table(U);

    for (let i = 0; i < 2; i++) {
        for (let j = i; j < 2; j++) {
            L[j][i] = U[j][i] / U[i][i];
        }
    }

    for (let k = 1; k < 2; k++) {
        for (let i = k - 1; i < 2; i++) {
            for (let j = i; j < 2; j++) {
                L[j][i] = U[j][i] / U[i][i];
            }
        }

        for (let i = k; i < 2; i++) {
            for (let j = k - 1; j < 2; j++) {
                U[i][j] = U[i][j] - L[i][k - 1] * U[k - 1][j];
            }
        }
    }

    console.table(L);
    console.table(U);

    if (D !== 0) {
        return [2, Dx / D, Dy / D];
    } else if (D !== Dx || D !== Dy) {
        return [5];
    }
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

    console.log(result.join("\n"));
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
