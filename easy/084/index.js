/**
 * 84. Пирамида
 *
 * Для строительства двумерной пирамиды используются прямоугольные блоки, каждый из которых
 * характеризуется шириной и высотой.
 * Можно поставить один блок на другой, только если ширина
 * верхнего блока строго меньше ширины нижнего (блоки нельзя поворачивать). Самым нижним в пирамиде
 * может быть блок любой ширины.
 * По заданному набору блоков определите, пирамиду какой наибольшей высоты можно из них построить.
 *
 * Формат ввода:
 * В первой строке входных данных задается число N — количество блоков (1≤N≤100000).
 * В следующих N строках задаются пары натуральных чисел w[i] и h[i] (1 ≤ w[i]​,h[i]​ ≤ 10^9 ) — ширина и высота
 * блока соответственно.
 *
 * Формат вывода:
 * Выведите одно целое число — максимальную высоту пирамиды.
 */

function getPyramidHeight(coordinates) {
    const xSet = new Map();

    for (let i = 0; i < coordinates.length; i++) {
        if (!xSet.has(coordinates[i][0])) {
            xSet.set(coordinates[i][0], 0);
        }
        xSet.set(coordinates[i][0], Math.max(xSet.get(coordinates[i][0]), coordinates[i][1]));
    }

    const widthPyramid = Array.from(xSet.keys());
    widthPyramid.sort((a, b) => b - a);
    const height = widthPyramid.reduce((sum, wdth) => sum + xSet.get(wdth), 0);

    return height;
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
    const N = readNumber();
    const input = [];
    for (let i = 0; i < N; i++) {
        input.push(readArray());
    }

    const ans = getPyramidHeight(input);
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

module.exports = getPyramidHeight;
