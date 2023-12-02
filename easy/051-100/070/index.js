/**
 * 70. Ближайшее число
 *
 * Напишите программу, которая находит в массиве элемент, самый близкий по величине к данному числу.
 *
 * Формат ввода
 * В первой строке задается одно натуральное число N, не превосходящее 1000 – размер массива. Во второй строке
 * содержатся N чисел – элементы массива (целые числа, не превосходящие по модулю 1000). В третьей строке вводится
 * одно целое число x, не превосходящее по модулю 1000.
 *
 * Формат вывода
 * Вывести значение элемента массива, ближайшее к x. Если таких чисел несколько, выведите любое из них.
 */

function getImmediateNumber(n, list, x) {
    let resultIndex = 0;

    const getDifference = (index) => {
        return Math.abs(x - list[index]);
    };
    let minDiff = getDifference(resultIndex);
    let currentDiff;

    for (let i = 1; i < list.length; i++) {
        currentDiff = getDifference(i);
        if (minDiff > currentDiff) {
            minDiff = currentDiff;
            resultIndex = i;
        }
    }
    return list[resultIndex];
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
    const list = readArray();
    const x = readInt();

    const result = getImmediateNumber(n, list, x);

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

module.exports = getImmediateNumber;
