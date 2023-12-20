/**
 * 77. Улучшение успеваемости
 *
 * В лицее на уроках информатики ответы учеников оцениваются целым числом баллов от 2 до 5.
 * Итоговая оценка по информатике выставляется как среднее арифметическое оценок на всех
 * уроках, округленное до ближайшего целого числа. Если среднее значение находится ровно
 * посередине между двумя целыми числами, то оценка округляется вверх.
 * Примеры округления оценок приведены в таблице.
 *
 * <Рисунок demo.77.png>
 *
 * Все ученики лицея стремятся получить итоговую оценку по информатике не ниже 4 баллов.
 * К сожалению, один из учеников получил на уроках a двоек, b троек и c четвёрок. Теперь
 * он планирует получить несколько пятёрок, причем хочет, чтобы итоговая оценка была
 * не меньше 4 баллов. Ему надо понять, какое минимальное количество пятёрок ему необходимо
 * получить, чтобы добиться своей цели.
 * Требуется написать программу, которая по заданным целым неотрицательные числам a, b и c
 * определяет минимальное количество пятёрок, которое необходимо получить ученику, чтобы
 * его итоговая оценка по информатике была не меньше 4 баллов.
 *
 * Формат ввода:
 * Входные данные содержат три строки. Первая строка содержит целое неотрицательное число a,
 * вторая строка содержит целое неотрицательное число b , третья строка содержит целое
 * неотрицательное число c (0 ≤ a, b, c ≤ 10^15, a + b + c ≥ 1).
 *
 * Формат вывода:
 * Выходные данные должны содержать одно число: минимальное число пятерок, которое необходимо
 * получить ученику, чтобы итоговая оценка была не меньше 4 баллов.
 *
 */
const leftSearch = (l, r, checkFn, ...checkParams) => {
    let m;
    while (l < r) {
        m = l + (r - l) / 2n;
        if (checkFn(m, ...checkParams)) {
            r = m;
        } else {
            l = m + 1n;
        }
    }
    return l;
};

const rightSearch = (l, r, checkFn, ...checkParams) => {
    let m;
    while (l < r) {
        m = l + (r - l + 1n) / 2n;
        if (checkFn(m, ...checkParams)) {
            l = m;
        } else {
            r = m - 1n;
        }
    }
    return l;
};

function getCountImprove(a, b, c) {
    const nowSum = a * 2n + b * 3n + c * 4n;
    const nowCount = a + b + c;

    const isValid = (count) => {
        return 2n * (nowSum + 5n * count) >= 7n * (nowCount + count);
    };

    const countImprove = leftSearch(0n, 10n ** 16n, isValid);

    return countImprove;
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
    const a = readBigInt();
    const b = readBigInt();
    const c = readBigInt();

    const result = getCountImprove(a, b, c);

    console.log(result.toString());
}

function readBigInt() {
    const n = BigInt(_inputLines[_curLine]);
    _curLine++;
    return n;
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
        .map((num) => BigInt(num));
    _curLine++;
    return arr;
}

function readString() {
    const s = _inputLines[_curLine].trim();
    _curLine++;
    return s;
}

module.exports = getCountImprove;
