/**
 * 76. Детали
 *
 * Имеется N кг металлического сплава. Из него изготавливают заготовки массой K кг каждая. После этого из каждой
 * заготовки вытачиваются детали массой M кг каждая (из каждой заготовки вытачивают максимально возможное количество
 * деталей). Если от заготовок после этого что-то остаётся, то этот материал возвращают к началу производственного
 * цикла и сплавляют с тем, что осталось при изготовлении заготовок. Если того сплава, который получился, достаточно
 * для изготовления хотя бы одной заготовки, то из него снова изготавливают заготовки, из них – детали и т.д.
 * Напишите программу, которая вычислит, какое количество деталей может быть получено по этой технологии из имеющихся
 * исходно N кг сплава.
 *
 * Формат ввода:
 * Вводятся N, K, M. Все числа натуральные и не превосходят 200.
 *
 * Формат вывода:
 * Выведите одно число — количество деталей, которое может получиться по такой технологии.
 */

function countDetails(n, k, m) {
    let count = 0;
    let balance = n;
    let curCount;
    const curDetails = Math.floor(k / m);
    const restDetails = k - m * curDetails;
    if (k >= m) {
        while (balance >= k) {
            curCount = Math.floor(balance / k);
            count += curCount * curDetails;
            balance = balance - k * curCount + restDetails * curCount;
        }
    }
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
    const params = readArray();
    const n = params[0];
    const k = params[1];
    const m = params[2];

    const result = countDetails(n, k, m);

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

function readEdges(n) {
    let grid = [];
    for (let i = 0; i < n; i++) {
        let vertex = readArray();
        grid.push(vertex);
    }
    return grid;
}

module.exports = countDetails;
