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
    let place = 0;
    let indexWinner = 0;

    for (let i = 1; i < n; i++) {
        if (list[i] > list[indexWinner]) {
            indexWinner = i;
        }
    }

    for (let p = indexWinner + 1; p < n - 1; p++) {
        if (list[p] % 10 === 5 && list[p] > list[p + 1]) {
            if (place === 0) {
                place = p;
            } else {
                place = list[p] > list[place] ? p : place;
            }
        }
    }

    if (place > 0) {
        let fromRight = 0;
        let resultVasily = list[place];

        for (let i = place + 1; i < n; i++) {
            if (list[i] > resultVasily) {
                fromRight++;
            }
        }

        for (let i = 0; i < place; i++) {
            if (list[i] <= resultVasily) {
                fromRight--;
            }
        }
        return place + fromRight + 1;
    }
    return 0;
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
