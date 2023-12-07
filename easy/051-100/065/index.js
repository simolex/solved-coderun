/**
 * 65. Наибольшее произведение трех чисел
 *
 * В данном списке из n ≤ 10^5 целых чисел найдите три числа,произведение которых максимально.
 * Решение должно иметь сложность O(n), где n - размер списка.
 *
 * Формат ввода
 * В единственной строке расположено n (3 ≤ n ≤ 10^5)
 * чисел  a[i] (−10^6 ≤ a[i] ≤ 10^6) - элементы массива.
 *
 * Формат вывода
 * Выведите три элемента массива, дающих наибольшее произведение, в любом порядке.
 *
 */

function threeMaxNumber(list) {
    const findSize = 3;
    const positiveMax = new Array(findSize);
    positiveMax.fill(Number.NEGATIVE_INFINITY);

    const negativeMax = new Array(findSize);
    negativeMax.fill(Number.POSITIVE_INFINITY);

    const negativeMin = new Array(findSize);
    negativeMin.fill(Number.NEGATIVE_INFINITY);

    const weightNumber = (num) => {
        if (num >= 0) {
            if (num > positiveMax[findSize - 1]) {
                positiveMax[findSize - 1] = num;
                positiveMax.sort((a, b) => b - a);
            }
        } else {
            if (num < negativeMax[findSize - 1]) {
                negativeMax[findSize - 1] = num;
                negativeMax.sort((a, b) => a - b);
            }
            if (num > negativeMin[findSize - 1]) {
                negativeMin[findSize - 1] = num;
                negativeMin.sort((a, b) => b - a);
            }
        }
    };

    for (let i = 0; i < list.length; i++) {
        weightNumber(list[i]);
    }

    for (let j = 0; j < findSize; j++) {
        if (positiveMax[findSize - j - 1] === Number.NEGATIVE_INFINITY) {
            positiveMax.pop();
        }
    }
    for (let j = 0; j < findSize; j++) {
        if (negativeMax[findSize - j - 1] === Number.POSITIVE_INFINITY) {
            negativeMax.pop();
        }
    }
    negativeMax.reverse();

    if (positiveMax.length === findSize && negativeMax.length >= findSize - 1) {
        if (
            positiveMax[1] * positiveMax[2] >
            negativeMax[negativeMax.length - 1] * negativeMax[negativeMax.length - 2]
        ) {
            return positiveMax;
        } else {
            return [
                positiveMax[0],
                negativeMax[negativeMax.length - 1],
                negativeMax[negativeMax.length - 2],
            ];
        }
    } else if (positiveMax.length >= 1 && negativeMax.length >= findSize - 1) {
        return [
            positiveMax[0],
            negativeMax[negativeMax.length - 1],
            negativeMax[negativeMax.length - 2],
        ];
    } else if (positiveMax.length === findSize && negativeMax.length <= 1) {
        return positiveMax;
    } else if (positiveMax.length <= 1 && negativeMax.length === findSize) {
        return negativeMin;
    }
    return positiveMax.concat(negativeMax).sort();
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
    const list = readArray();

    const result = threeMaxNumber(list);

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

module.exports = threeMaxNumber;
