/**
 * 106. Провода
 *
 * Дано N отрезков провода длиной L1, L2, ..., LN сантиметров. Требуется с помощью разрезания получить
 * из них K равных отрезков как можно большей длины, выражающейся целым числом сантиметров. Если нельзя
 * получить K отрезков длиной даже 1 см, вывести 0.
 *
 * Формат ввода:
 * В первой строке находятся числа N и К. В следующих N строках - L1, L2, ..., LN, по одному числу в строке.
 * Ограничения: 1 ≤ N, K ≤ 10 000, 100 ≤ Li ≤ 10 000 000, все числа целые.
 *
 * Формат вывода:
 * Вывести одно число - полученную длину отрезков.
 *
 */
const leftSearch = (l, r, checkFn, ...checkParams) => {
    let m;
    while (l < r) {
        m = l + Math.floor((r - l) / 2);
        if (checkFn(m, ...checkParams)) {
            r = m;
        } else {
            l = m + 1;
        }
    }
    return l;
};

const rightSearch = (l, r, checkFn, ...checkParams) => {
    let m;
    while (l < r) {
        m = l + Math.ceil((r - l) / 2);
        if (checkFn(m, ...checkParams)) {
            l = m;
        } else {
            r = m - 1;
        }
    }
    return l;
};

function sizeWireSegment(N, K, segments) {
    let maxLength = segments.reduce((max, w) => Math.max(max, w), 0);

    const isValid = (length) => {
        return segments.reduce((sum, w) => sum + Math.floor(w / length), 0) >= K;
    };

    const lengthSegment = rightSearch(0, maxLength, isValid);

    return lengthSegment;
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
    const N = params[0];
    const K = params[1];

    const segments = [];
    for (let i = 0; i < N; i++) {
        segments.push(readInt());
    }

    const result = sizeWireSegment(N, K, segments);

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

module.exports = sizeWireSegment;
