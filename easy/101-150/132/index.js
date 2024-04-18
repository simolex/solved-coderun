/**
 * 132. Коллекционер Диего
 *
 * Рассмотрим фигуру, аналогичную показанной на рисунке (большой равносторонний треугольник, составленный
 * из маленьких равносторонних треугольников). На рисунке приведена фигура, состоящая из 4-х уровней
 * треугольников.
 *
 * <image.png>
 *
 * Напишите программу, которая будет определять, сколько всего в ней треугольников (необходимо учитывать
 * не только «маленькие» треугольники, а вообще все треугольники — в частности, нас интересуют треугольник,
 * выделенный жирным, вся фигура).
 *
 * Формат ввода:
 * Вводится одно число N — количество уровней в фигуре (1 ≤ N ≤ 100000)
 *
 * Формат вывода:
 * Выведите количество треугольников в такой фигуре.
 *
 * Примечания:
 */

function collectorDiego(existSticker, interestingStickers) {
    const leftSearch = (target) => {
        const { validateHeaderValue } = require("http");
        let l = 0;
        let r = existSticker.length;

        while (l < r) {
            const m = l + Math.ceil((r - l) / 2);
            if (target > existSticker[m]) {
                l = m;
            } else {
                r = m - 1;
            }
        }
        return l;
    };
    const uniqStickers = existSticker.reduce((a, v) => {
        a.add(v);
        return a;
    }, new Set());
    existSticker = [...uniqStickers.values()];
    existSticker.sort((a, b) => a - b);
    existSticker.unshift(-1);

    const result = interestingStickers.map((v) => leftSearch(v));

    return result;
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

    const existSticker = readArray();
    const k = readInt();
    const interestingStickers = readArray();

    const result = collectorDiego(existSticker, interestingStickers);

    console.log(result.join("\n"));
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

module.exports = collectorDiego;
