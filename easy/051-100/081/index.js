/**
 * 81. Треугольник
 *
 * Даны три натуральных числа. Возможно ли построить треугольник с такими сторонами? Если это возможно,
 * выведите строку YES, иначе выведите строку NO.
 * Треугольник — это три точки, не лежащие на одной прямой.
 *
 * Формат ввода:
 * Вводятся три натуральных числа.
 *
 * Формат вывода:
 * Выведите ответ на задачу.
 */

function isTriangle(a, b, c) {
    const ab = a + b;
    const ac = a + c;
    const bc = b + c;

    return ab > c && ac > b && bc > a ? "YES" : "NO";
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
    const a = readInt();
    const b = readInt();
    const c = readInt();

    const result = isTriangle(a, b, c);

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

module.exports = isTriangle;
