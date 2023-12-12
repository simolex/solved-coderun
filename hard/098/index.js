/**
 * 98. Треугольники
 *
 * Петя достаточно давно занимается в математическом кружке, поэтому он уже успел изучить не только правила выполнения
 * простейших операций, но и такое достаточно сложное понятие как симметрия. Для того, чтобы получше изучить симметрию,
 * Петя решил начать с наиболее простых геометрических фигур – треугольников. Он скоро понял, что осевой симметрией
 * обладают так называемые равнобедренные треугольники. Поэтому теперь Петя ищет везде такие треугольники. Напомним,
 * что треугольник называется равнобедренным, если его площадь положительна, и у него есть хотя бы две равные стороны.
 * Недавно Петя, зайдя в класс, увидел, что на доске нарисовано n точек. Разумеется, он сразу задумался, сколько
 * существует троек из этих точек, которые являются вершинами равнобедренных треугольников.
 * Требуется написать программу, решающую указанную задачу.
 *
 * Формат ввода:
 * Входной файл содержит целое число n (3 ≤ n ≤ 1500). Каждая из последующих строк содержит по два целых
 * числа – xi и yi – координаты i-ой точки. Координаты точек не превосходят 109 по абсолютной величине.
 * Среди заданных точек нет совпадающих.
 *
 * Формат вывода:
 * В выходной файл выведите ответ на задачу.
 *
 */

function countTriangle(n, coords) {
    let count = 0;

    const mapEdges = [];
    for (let i = 0; i < n; i++) {
        mapEdges[i] = [];
    }

    const getEdgeLength = (c1, c2) => {
        let length;
        if (mapEdges[c1][c2 - c1]) {
            length = mapEdges[c1][c2 - c1];
        } else {
            const x = coords[c2][0] - coords[c1][0];
            const y = coords[c2][1] - coords[c1][1];
            length = x * x + y * y;
            mapEdges[c1][c2 - c1] = length;
        }
        return length;
    };
    let edgeFirst;
    let edgeSecond;
    let edgeThird;
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            edgeFirst = getEdgeLength(i, j);
            for (let k = j + 1; k < n; k++) {
                edgeSecond = getEdgeLength(i, k);
                edgeThird = getEdgeLength(j, k);

                console.log(edgeFirst, edgeSecond, edgeThird);
            }
        }
    }
    return count;
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
    const n = readInt();
    const coords = [];
    for (let i = 0; i < n; i++) {
        coords.push(readArray());
    }

    const result = countTriangle(n, coords);

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

function readString() {
    const s = _inputLines[_curLine].trim();
    _curLine++;
    return s;
}

module.exports = countTriangle;
