/**
 *
 * 62. Количество различных чисел
 *
 * Дан список чисел, который может содержать до 100000 чисел. Определите, сколько в нём встречается различных чисел.
 *
 * Формат ввода:
 * Вводится список целых чисел. Все числа списка находятся на одной строке.
 *
 * Формат вывода:
 * Выведите ответ на задачу.
 *
 */

function getCountNumbers(nums) {
    const commonNumbers = new Set();
    for (const n of nums) {
        commonNumbers.add(n);
    }

    return commonNumbers.size;
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
    const nums = readArray();

    const ans = getCountNumbers(nums);
    console.log(ans);
}

function readArray() {
    var arr = _inputLines[_curLine]
        .trim(" ")
        .split(" ")
        .map((num) => Number(num));
    _curLine++;
    return arr;
}

function readLine() {
    const line = _inputLines[_curLine];
    _curLine++;
    return line.trim();
}

function readNumber() {
    return Number(_inputLines[_curLine++]);
}

// function readStations() {
//     const M = readNumber();
//     let stations = [];
//     for (let i = 0; i < M; i++) {
//         stations.push(readArray());
//     }
//     return stations;
// }

module.exports = getCountNumbers;
