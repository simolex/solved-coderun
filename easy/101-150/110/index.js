/**
 * 110. Наблюдение за студентами
 *
 * На первом курсе одной Школы, учится 1 ≤ N ≤ 109 студентов. При проведении экзаменов студентов рассаживают в ряд,
 * каждого за своей партой. Парты пронумерованы числами от 0 до N - 1.
 * Известно, что студент, оставшись без наблюдения, открывает телефон и начинает искать ответы на экзамен
 * в поисковике Яндекса.
 * Поэтому было решено позвать M преподавателей наблюдать за студентами. Когда за студентом наблюдает хотя бы один
 * преподаватель, он стесняется и не идет искать ответы к экзамену. Преподаватель с номером i видит студентов сидящих
 * за партами от bi до ei включительно.
 * Необходимо посчитать количество студентов, которые все таки будут искать ответы к экзамену в Яндексе
 *
 * Формат ввода:
 * В первой строке находятся два целых числа 1 ≤ N ≤ 109, 1 ≤ M ≤ 104 — число студентов и число преподавателей
 * соответственно. В следующих M строках содержится по два целых числа 0 ≤ bi ≤ ei ≤ N - 1 — парты, за которыми
 * наблюдает i-й преподаватель.
 *
 * Формат вывода:
 * Выведите одно число — количество студентов оставшихся без наблюдения.
 */

function noControlled(N, M, desks) {
    let result = 0;

    return result;
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
    const M = params[1];

    const desks = [];
    for (let i = 0; i < N; i++) {
        desks.push(readArray());
    }

    const result = noControlled(N, M, desks);

    console.log(result);
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readArray() {
    let arr = _inputLines[_curLine]
        .trim()
        .split(/\s+/)
        .map((num) => Number(num));
    _curLine++;
    return arr;
}

function readString() {
    const s = _inputLines[_curLine].trim();
    _curLine++;
    return s;
}

module.exports = noControlled;
