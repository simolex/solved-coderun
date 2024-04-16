/**
 * 29. Количество треугольников
 *
 * Рассмотрим фигуру, аналогичную показанной на рисунке (большой равносторонний треугольник, составленный
 * из маленьких равносторонних треугольников). На рисунке приведена фигура, состоящая из 4-х уровней
 * треугольников.
 *
 * <image.png>
 *
 * Напишите программу, которая будет определять, сколько всего в ней треугольников (необходимо учитывать
 * не только «маленькие» треугольники, а вообще все треугольники — в частности, нас интересуют треугольник,
 * выделенный жирным, вся фигура).
 *
 * Формат ввода:
 * Вводится одно число N — количество уровней в фигуре (1 ≤ N ≤ 100000)
 *
 * Формат вывода:
 * Выведите количество треугольников в такой фигуре.
 *
 * Примечания:
 */

function countInnerTriangle(n) {
    return Math.floor((n * (n + 2) * (2 * n + 1)) / 8);
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

    const result = countInnerTriangle(n);

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

module.exports = countInnerTriangle;
