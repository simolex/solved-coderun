/**
 * 131. Красивая строка
 *
 * Красотой строки назовем максимальное число идущих подряд одинаковых букв.
 * (красота строки abcaabdddettq равна 3)
 * Сделайте данную вам строку как можно более красивой, если вы можете сделать не более
 * k операций замены символа.
 *
 * Формат ввода:
 * В первой строке записано одно целое число k (0 ≤ k ≤ 10^9)
 * Во второй строке дана непустая строчка S (|S| ≤ 2 ⋅ 10^5). Строчка S состоит только
 * из маленьких латинских букв.
 *
 * Формат вывода:
 * Выведите одно число — максимально возможную красоту строчки, которую можно получить.
 *
 * Примечания:
 */

function beautifulString(replacingCount, line) {
    const n = line.length;
    const setLetters = {};

    const nextWord = (letter, curPos = 0) => {
        const curSet = setLetters[letter];

        while (curSet.start >= 0 && curSet.start < n && line.charAt(curSet.start) === letter) {
            if (curSet.hit > 0) {
                curSet.hit--;
            }
            curSet.start++;
        }
        if (curSet.start < 0) {
            curSet.start = 0;
        }
        while (curSet.start < n && line.charAt(curSet.start) !== letter) {
            curSet.start++;
        }
        if (curSet.start >= curPos) {
            curSet.hit = 1;
        }
        if (curPos > 0) {
            curSet.miss = Math.max(0, curPos - curSet.start - curSet.hit + 1);
        }
    };

    if (replacingCount >= n - 1) {
        return n;
    }

    for (let i = 0; i < n; i++) {
        if (!setLetters[line.charAt(i)]) {
            setLetters[line.charAt(i)] = { miss: 0, hit: 0, start: -1 };
        }
    }

    let maxWord = 0;
    for (const letter in setLetters) {
        const curSet = setLetters[letter];
        nextWord(letter);
        maxWord = Math.max(maxWord, replacingCount + curSet.hit);

        for (let i = curSet.start + 1; i < n; i++) {
            const currentChar = line.charAt(i);
            if (letter === currentChar) {
                curSet.hit++;
            } else {
                curSet.miss++;
                if (curSet.miss > replacingCount) {
                    nextWord(letter, i);
                    if (curSet.start > i) {
                        i = curSet.start + 1;
                    }
                }
            }
            maxWord = Math.max(maxWord, replacingCount + curSet.hit);
        }
    }

    return maxWord;
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
    const replacingCount = readInt();
    const line = readString();

    const result = beautifulString(replacingCount, line);
    console.log(result);
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
        .filter((str) => str && str.length > 0)
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

module.exports = beautifulString;
