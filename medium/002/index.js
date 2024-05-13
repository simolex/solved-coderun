/**
 * 2. Самый дешевый путь
 *
 * В каждой клетке прямоугольной таблицы N×M записано некоторое число. Изначально игрок находится в левой
 * верхней клетке. За один ход ему разрешается перемещаться в соседнюю клетку либо вправо, либо вниз (влево
 * и вверх перемещаться запрещено). При проходе через клетку с игрока берут столько килограммов еды, какое
 * число записано в этой клетке (еду берут также за первую и последнюю клетки его пути).
 * Требуется найти минимальный вес еды в килограммах, отдав которую игрок может попасть в правый нижний угол.
 *
 * Формат ввода:
 * Вводятся два числа N и M — размеры таблицы (1 ≤ N ≤ 20, 1 ≤ M ≤ 20). Затем идет N строк по M чисел в каждой
 * — размеры штрафов в килограммах за прохождение через соответствующие клетки (числа от 0 до 100).
 *
 * Формат вывода:
 * Выведите минимальный вес еды в килограммах, отдав которую можно попасть в правый нижний угол.
 *
 * Примечания:
 *
 */

function cheapestWay(n, m, weights) {
    const dp = [];

    for (let i = 0; i <= n; i++) {
        if ((i = 0)) {
            dp.push(Array(m + 1).fill(Number.POSITIVE_INFINITY));
            continue;
        }

        dp.push(Array(m + 1).fill(0));
        dp[i][0] = Number.POSITIVE_INFINITY;
    }

    const delta = [
        [-1, 0],
        [0, -1],
    ];

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (i === 1 && j === 1) {
                dp[i][j] = weights[i - 1][j - 1];
                continue;
            }
            dp[i][j] =
                weights[i - 1][j - 1] +
                delta.reduce(
                    (min, d) => (min > dp[i + d[0]][j + d[1]] ? dp[i + d[0]][j + d[1]] : min),
                    Number.POSITIVE_INFINITY
                );
        }
    }

    console.log(dp);

    return dp[n][m];
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
    const n = params[0];
    const m = params[1];
    const weights = [];

    for (let i = 0; i < n; i++) {
        weights.push(readArray());
    }

    const result = cheapestWay(n, m, weights);

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

module.exports = cheapestWay;
