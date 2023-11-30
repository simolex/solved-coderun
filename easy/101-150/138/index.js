/**
 * 138. Сумма в прямоугольнике
 *
 * Вам необходимо ответить на запросы узнать сумму всех элементов числовой матрицы N×M в прямоугольнике
 * с левым верхним углом (x1, y1) и правым нижним (x2, y2)
 *
 * Формат ввода:
 * В первой строке находится числа N, M размеры матрицы (1 ≤ N, M ≤ 1000)
 * и K — количество запросов (1 ≤ K ≤ 100000).
 * Каждая из следующих N строк содержит по M чисел — элементы соответствующей строки матрицы (по модулю
 * не превосходят 1000). Последующие K строк содержат по 4 целых числа,
 * разделенных пробелом x[1] y[1] x[2] y[2] — запрос на сумму элементов матрице
 * в прямоугольнике (1 ≤ x[1] ≤ x[2] ≤ N, 1 ≤ y[1] ≤ y[2] ≤ M)
 *
 * Формат вывода:
 * Для каждого запроса на отдельной строке выведите его результат — сумму всех чисел в элементов
 * матрице в прямоугольнике (x[1], y[1]), (x[2], y[2])
 *
 */

function getSumRectangle(n, m, arrNums, k, querySum) {
    const amounts = [];

    for (let i = 0; i <= n; i++) {
        amounts[i] = [];
        for (let j = 0; j <= m; j++) {
            if (i !== 0 && j !== 0) {
                amounts[i][j] = amounts[i - 1][j] + amounts[i][j - 1] - amounts[i - 1][j - 1] + arrNums[i - 1][j - 1];
            } else {
                amounts[i][j] = 0;
            }
        }
    }

    function getSum(i_1, j_1, i_2, j_2) {
        return amounts[i_2][j_2] - amounts[i_1 - 1][j_2] - amounts[i_2][j_1 - 1] + amounts[i_1 - 1][j_1 - 1];
    }

    const result = [];
    for (let i = 0; i < k; i++) {
        result.push(getSum(querySum[i][0], querySum[i][1], querySum[i][2], querySum[i][3]));
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
    const params = readArray();
    const n = params[0];
    const m = params[1];
    const k = params[2];

    const arrNums = [];
    for (let i = 0; i < n; i++) {
        arrNums.push(readArray());
    }

    const querySum = [];
    for (let i = 0; i < k; i++) {
        querySum.push(readArray());
    }

    const result = getSumRectangle(n, m, arrNums, k, querySum);

    console.log(result.join("\n"));
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

module.exports = getSumRectangle;
