/**
 * 103. Расстановка ноутбуков
 *
 * В школе решили на один прямоугольный стол поставить два прямоугольных ноутбука. Ноутбуки нужно поставить так,
 * чтобы их стороны были параллельны сторонам стола. Определите, какие размеры должен иметь стол, чтобы оба
 * ноутбука на него поместились, и площадь стола была минимальна.
 *
 * Формат ввода:
 * Вводится четыре натуральных числа, первые два задают размеры одного ноутбука, а следующие два — размеры второго.
 * Числа не превышают 1000.
 *
 * Формат вывода:
 * Выведите два числа — размеры стола. Если возможно несколько ответов, выведите любой из них (но только один).
 */

function getMinTable(a, b, c, d) {
    const getTableSize = (a1, b1, a2, b2) => {
        return [Math.max(a1, a2), b1 + b2];
    };

    const allSize = [];

    allSize.push(getTableSize(a, b, c, d));
    allSize.push(getTableSize(a, b, d, c));
    allSize.push(getTableSize(b, a, c, d));
    allSize.push(getTableSize(b, a, d, c));

    const minSquare = allSize.reduce((m, v) => Math.min(m, v[0] * v[1]), Infinity);

    result = [];
    allSize.forEach((v) => {
        if (v[0] * v[1] === minSquare) {
            result.push(v);
            result.push([v[1], v[0]]);
        }
    });

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
    const sizes = readArray();
    const a = sizes[0];
    const b = sizes[1];
    const c = sizes[2];
    const d = sizes[3];

    const result = getMinTable(a, b, c, d);

    console.log(result[0].join(" "));
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

module.exports = getMinTable;
