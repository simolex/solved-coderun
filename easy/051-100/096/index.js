/**
 * 96. Подстрока
 *
 * В этой задаче Вам требуется найти максимальную по длине подстроку данной строки, такую что каждый символ встречается
 * в ней не более k раз.
 *
 * Формат ввода:
 * В первой строке даны два целых числа n и k (1 ≤ n ≤ 100000, 1 ≤ k ≤ n ) , где n – количество символов в строке.
 * Во второй строке n символов – данная строка, состоящая только из строчных латинских букв.
 *
 * Формат вывода:
 * В выходной файл выведите два числа – длину искомой подстроки и номер её первого символа. Если решений несколько,
 * выведите любое.
 */

function findSubstring(n, k, inString) {
    // let minLeft = 0;
    // let minRight = n;
    // const treesColor = new Uint32Array(k + 1);
    // treesColor.fill(0);
    // let treesColorSize = 0;
    // let right = -1;
    // const addColor = (color) => {
    //     if (treesColor[color] > 0) {
    //         treesColor[color]++;
    //     } else {
    //         treesColor[color] = 1;
    //         treesColorSize++;
    //     }
    // };
    // const delColor = (color) => {
    //     if (treesColor[color] > 0) {
    //         treesColor[color]--;
    //         if (treesColor[color] === 0) {
    //             treesColorSize--;
    //         }
    //     }
    // };
    // for (let left = 0; left < n; left++) {
    //     while (treesColorSize < k && right < n - 1) {
    //         right++;
    //         addColor(avenue[right]);
    //     }
    //     if (treesColorSize === k && minRight - minLeft > right - left) {
    //         minLeft = left;
    //         minRight = right;
    //     }
    //     delColor(avenue[left]);
    // }
    // return [minLeft + 1, minRight + 1];
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
    const n = params[0];
    const k = params[1];
    const inString = readString();

    const result = findSubstring(n, k, inString);

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

function readString() {
    const s = _inputLines[_curLine].trim();
    _curLine++;
    return s;
}

module.exports = findSubstring;
