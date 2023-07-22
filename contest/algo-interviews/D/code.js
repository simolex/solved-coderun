/**
 * Вам дана матрица из n строк и m столбцов, заполненная натуральными числами.
 * По матрице можно перемещаться, из клетки можно уходить только в соседнюю по стороне клетку,
 * переходы по диагонали, а также выход за границу матрицы запрещены.
 * Ваша задача — найти наиболее длинный возрастающий путь в матрице.
 * Путь возрастающий, если значения в посещаемых клетках строго возрастают от начала пути к его концу.
 *
 * Формат ввода:
 * В первой строке даны два числа, описывающие размер матрицы — n, m (1≤n,m≤10^3).
 * В следующих n строках записана сама матрица. i-я строка матрицы содержит m чисел,
 * записанных через пробел. Все элементы матрицы — натуральные числа, не превосходящие 10^9.
 *
 * Формат вывода:
 * Выведите единственное число — длину наибольшего возрастающего пути.
 */

function getLongestIncreasingPath(matrix) {
    // your code goes here
    return 0;
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
    const matrix = readMatrix();
    const ans = getLongestIncreasingPath(matrix);
    console.log(ans);
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

function readMatrix() {
    let sizes = readArray();
    let n = sizes[0];
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix.push(readArray());
    }
    return matrix;
}
