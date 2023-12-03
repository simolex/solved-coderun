/**
 * 69. Больше своих соседей
 *
 * Дан список чисел. Определите, сколько в этом списке элементов, которые больше двух своих соседей
 * и выведите количество таких элементов.
 *
 * Формат ввода
 * Вводится список чисел. Все числа списка находятся на одной строке.
 *
 * Формат вывода
 * Выведите ответ на задачу.
 */

function getCountPeaks(list) {
    let count = 0;

    for (let i = 1; i < list.length - 1; i++) {
        if (list[i] > list[i - 1] && list[i] > list[i + 1]) {
            count++;
        }
    }
    return count;
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
    const list = readArray();

    const result = getCountPeaks(list);

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

module.exports = getCountPeaks;
