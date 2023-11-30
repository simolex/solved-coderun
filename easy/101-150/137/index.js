/**
 * 137. Минимальный прямоугольник
 *
 * На клетчатой плоскости закрашено K клеток. Требуется найти минимальный по площади прямоугольник,
 * со сторонами, параллельными линиям сетки, покрывающий все закрашенные клетки.
 *
 * Формат ввода:
 * Во входном файле, на первой строке, находится число K (1 ≤ K ≤ 100). На следующих K строках находятся
 * пары чисел Xi и Yi – координаты закрашенных клеток (|Xi|, |Yi| ≤ 109).
 *
 * Формат вывода:
 * Выведите в выходной файл координаты левого нижнего и правого верхнего углов прямоугольника.
 *
 */

function getMinRectangle(n, coords) {
    let minLeftX = Infinity;
    let minLeftY = Infinity;
    let maxRightX = 0;
    let maxRightY = 0;
    for (let i = 0; i < n; i++) {
        minLeftX = Math.min(minLeftX, coords[i][0]);
        maxRightX = Math.max(maxRightX, coords[i][0]);
        minLeftY = Math.min(minLeftY, coords[i][1]);
        maxRightY = Math.max(maxRightY, coords[i][1]);
    }

    return [minLeftX, minLeftY, maxRightX, maxRightY];
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

    const coords = [];

    for (let i = 0; i < n; i++) {
        coords.push(readArray());
    }
    const result = getMinRectangle(n, coords);

    console.log(result.join(" "));
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

module.exports = getMinRectangle;
