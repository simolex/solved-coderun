/**
 * 150. Три единицы подряд
 *
 * По данному числу N определите количество последовательностей из нулей и единиц длины N,
 * в которых никакие три единицы не стоят рядом.
 *
 * Формат ввода:
 * Во входном файле написано натуральное число N, не превосходящее 35.
 *
 * Формат вывода:
 * Выведите количество искомых последовательностей. Гарантируется, что ответ не превосходит 2^31−1.
 */

function getCount(n) {
    const result = [];
    result[0] = 2;
    result[1] = 4;
    result[2] = 7;

    for (let i = 3; i < n; i++) {
        result[i] = result[i - 3] + result[i - 2] + result[i - 1];
    }

    return result[n - 1];
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

    const result = getCount(n);

    console.log(result);
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readArray() {
    var arr = _inputLines[_curLine]
        .trim(" ")
        .split(" ")
        .map((num) => Number(num));
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

module.exports = getCount;
