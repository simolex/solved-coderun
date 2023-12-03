/**
 * 64. Сапер
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

neighbourCoords = [
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1]
];

function createSapperField(n, m, k, mines) {
    const field = new Array(n);
    let dX, dY;
    const setPlusMine = (x, y) => {
        neighbourCoords.forEach((delta) => {
            dX = x + delta[0];
            dY = y + delta[1];
            field[x][y] = "*";
            if (dX >= 0 && dX < n && dY >= 0 && dY < m) {
                if (field[dX][dY] !== "*") {
                    field[dX][dY] += 1;
                }
            }
        });
    };

    for (let i = 0; i < n; i++) {
        field[i] = new Array(m);
        field[i].fill(0);
    }

    mines.forEach((mineCoord) => setPlusMine(mineCoord[0] - 1, mineCoord[1] - 1));
    return field;
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

    mines = [];
    for (let i = 0; i < k; i++) {
        mines.push(readArray());
    }

    const result = createSapperField(n, m, k, mines);

    console.log(result.map((l) => l.join(" ")).join("\n"));
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

module.exports = createSapperField;
