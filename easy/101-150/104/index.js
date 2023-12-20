/**
 * 104. Очень лёгкая задача
 *
 * Сегодня утром жюри решило добавить в вариант олимпиады еще одну, Очень Лёгкую Задачу.
 * Ответственный секретарь Оргкомитета напечатал её условие в одном экземпляре, и теперь
 * ему нужно до начала олимпиады успеть сделать еще N копий. В его распоряжении имеются
 * два ксерокса, один из которых копирует лист за х секунд, а другой – за y. (Разрешается
 * использовать как один ксерокс, так и оба одновременно. Можно копировать не только
 * с оригинала, но и с копии) Помогите ему выяснить, какое минимальное время для этого
 * потребуется.
 *
 * Формат ввода:
 * На вход программы поступают три натуральных числа N, x и y,
 * разделенные пробелом (1 ≤ N ≤ 2 × 10^8, 1 ≤ x, y ≤ 10).
 *
 * Формат вывода:
 * Выведите одно число – минимальное время в секундах, необходимое для получения N копий.
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

function getMinimalTime(N, x, y) {
    const faster = Math.min(x, y);

    if (N > 1) {
        const isValid = (time) => {
            return Math.floor(time / x) + Math.floor(time / y) >= N - 1;
        };

        return leftSearch(faster + 1, 10 ** 10, isValid);
    }

    return faster * N;
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
    const params = readArray();
    const N = params[0];
    const x = params[1];
    const y = params[2];

    const result = getMinimalTime(N, x, y);

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

module.exports = getMinimalTime;
