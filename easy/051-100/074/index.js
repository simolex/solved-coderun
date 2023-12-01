/**
 * 74. Узник замка Иф
 *
 * За многие годы заточения узник замка Иф проделал в стене прямоугольное отверстие размером D × E.
 * Замок Иф сложен из кирпичей, размером A × B × C. Определите, сможет ли узник выбрасывать кирпичи в море через
 * это отверстие, если стороны кирпича должны быть параллельны сторонам отверстия.
 *
 * Формат ввода:
 * Программа получает на вход числа A, B, C, D, E.
 *
 * Формат вывода:
 * Программа должна вывести слово YES или NO.
 */

function isCanDropBlock(a, b, c, d, e) {
    [a, b, c] = [a, b, c].sort((a, b) => b - a);

    if (d < e) {
        const t = e;
        e = d;
        d = t;
    }

    return d >= b && e >= c ? "YES" : "NO";
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
    const a = readNumber();
    const b = readNumber();
    const c = readNumber();
    const d = readNumber();
    const e = readNumber();

    const ans = isCanDropBlock(a, b, c, d, e);
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

module.exports = isCanDropBlock;
