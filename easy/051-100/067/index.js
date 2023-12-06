/**
 * 67. Симметричная последовательность
 *
 * Последовательность чисел назовём симметричной, если она одинаково читается как слева направо, так и справа
 * налево. Например, следующие последовательности являются симметричными:
 * 1 2 3 4 5 4 3 2 1
 * 1 2 1 2 2 1 2 1
 * Вашей программе будет дана последовательность чисел. Требуется определить, какое минимальное количество
 * и каких чисел надо приписать в конец этой последовательности, чтобы она стала симметричной.
 *
 * Формат ввода
 * Сначала вводится число N — количество элементов исходной последовательности (1 ≤ N ≤ 100).
 * Далее идут N чисел — элементы этой последовательности, натуральные числа от 1 до 9.
 *
 * Формат вывода
 * Выведите сначала число M — минимальное количество элементов, которое надо дописать к последовательности,
 * а потом M чисел (каждое — от 1 до 9) — числа, которые надо дописать к последовательности.
 */

function appendSymSequence(n, list) {
    for (let i = 0; i < n - 1; i++) {
        let polyndrom = true;
        for (let j = 0; j < Math.floor((n - i) / 2) && polyndrom; j++) {
            if (list[i + j] !== list[n - j - 1]) {
                polyndrom = false;
            }
        }
        if (polyndrom) {
            return list.slice(0, i).reverse();
        }
    }
    return list.slice(0, n - 1).reverse();
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
    const list = readArray();

    const result = appendSymSequence(n, list);

    console.log(result.length);
    if (result.length > 0) console.log(result.join(" "));
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

module.exports = appendSymSequence;
