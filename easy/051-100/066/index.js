/**
 * 66. Наибольшее произведение двух чисел
 *
 * Дан список, заполненный произвольными целыми числами. Найдите в этом списке два числа, произведение которых
 * максимально. Выведите эти числа в порядке неубывания. Список содержит не менее двух элементов. Числа подобраны
 * так, что ответ однозначен. Решение должно иметь сложность O(n), где n - размер списка.
 *
 */

function twoMaxNumber(list) {
    const positiveMax = [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY];
    const negativeMax = [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY];

    const weightNumber = (num) => {
        if (num >= 0) {
            if (num > positiveMax[1]) {
                positiveMax[0] = positiveMax[1];
                positiveMax[1] = num;
            } else if (num > positiveMax[0]) {
                positiveMax[0] = num;
            }
        } else {
            if (num < negativeMax[0]) {
                negativeMax[1] = negativeMax[0];
                negativeMax[0] = num;
            } else if (num < negativeMax[1]) {
                negativeMax[1] = num;
            }
        }
    };

    for (let i = 0; i < list.length; i++) {
        weightNumber(list[i]);
    }

    for (let j = 0; j < 2; j++) {
        if (positiveMax[0] === Number.NEGATIVE_INFINITY) {
            positiveMax.shift();
        }
    }
    for (let j = 0; j < 2; j++) {
        if (negativeMax[0] === Number.POSITIVE_INFINITY) {
            negativeMax.shift();
        }
    }

    if (positiveMax.length === 2 && negativeMax.length === 2) {
        if (positiveMax[0] * positiveMax[1] > negativeMax[0] * negativeMax[1]) {
            return positiveMax;
        } else {
            return negativeMax;
        }
    } else if (positiveMax.length === 2 && negativeMax.length === 0) {
        return positiveMax;
    } else if (positiveMax.length === 0 && negativeMax.length === 2) {
        return negativeMax;
    }
    return [negativeMax[0], positiveMax[0]];
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
    const list = readArray();

    const result = twoMaxNumber(list);

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

module.exports = twoMaxNumber;
