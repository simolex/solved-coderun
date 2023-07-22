/**
 * Вам дан массив натуральных чисел a[i].
 * Найдите число таких пар элементов (a[i],a[j]), где ∣a[i]−a[j]∣ %200==0 и i<j.
 *
 * Формат ввода:
 * В первой строке дан размер массива n (1≤n≤200000 ).
 * Во второй строке через пробел записаны элементы массива a[i] (1≤a[i]≤10^9).
 *
 * Формат вывода:
 * Выведите единственное число — количество пар, подходящих под указанное выше условие.
 *
 */

function getNumberOfGoodPairs(n, numbers) {
    let count = 0;
    console.log(numbers);
    const modNums = numbers.reduce((hash, val) => {
        if (hash[val % 200] === undefined) {
            hash[val % 200] = 1;
        } else {
            ++hash[val % 200];
        }
        return hash;
    }, {});

    Object.values(modNums).map((val) => {
        if (val > 1) {
            count += (val * (val - 1)) / 2;
        }
    });

    return count;
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
    const numbers = readArray();
    const ans = getNumberOfGoodPairs(n, numbers);
    console.log(ans);
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

module.exports = getNumberOfGoodPairs;
