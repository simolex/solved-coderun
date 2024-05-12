/**
 * 361. Гвоздики
 *
 * В дощечке в один ряд вбиты гвоздики. Любые два гвоздика можно соединить ниточкой. Требуется соединить
 * некоторые пары гвоздиков ниточками так, чтобы к каждому гвоздику была привязана хотя бы одна ниточка,
 * а суммарная длина всех ниточек была минимальна.
 *
 * Формат ввода:
 * В первой строке входных данных записано число N — количество гвоздиков (2 ≤ N ≤ 100). В следующей строке
 * заданы N чисел — координаты всех гвоздиков (неотрицательные целые числа, не превосходящие 10000).
 *
 * Формат вывода:
 * Выведите единственное число — минимальную суммарную длину всех ниточек.
 *
 * Примечания:
 *
 */
function distanceOfNail(nails) {
    const dp = [];
    const n = nails.length;

    nails.sort((a, b) => a - b);

    dp[1] = nails[1] - nails[0];
    dp[n - 1] = nails[n - 1] - nails[n - 2];

    for (let i = 2; i < n; i++) {
        const dist = nails[i] - nails[i - 1];
        dp[i] = Number.POSITIVE_INFINITY;
        for (let j = 1; j <= 2; j++) {
            if (dp[i] > dp[i - j] + dist) {
                dp[i] = dp[i - j] + dist;
            }
        }
    }

    return dp[n - 1];
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
    const nails = readArray();

    const result = distanceOfNail(nails);
    console.log(result);
}

function readAllString() {
    var arr = _inputLines.map((line) => line.trim());

    return arr;
}

function readString() {
    var str = _inputLines[_curLine].trim(" ");
    _curLine++;
    return str;
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}
function readBigInt() {
    const n = BigInt(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readArray() {
    var arr = _inputLines[_curLine]
        .trim(" ")
        .split(" ")
        .filter((str) => str && str.length > 0)
        .map((num) => Number(num));
    _curLine++;
    return arr;
}

function readBigIntArray() {
    var arr = _inputLines[_curLine]
        .trim(" ")
        .split(" ")
        .map((num) => BigInt(num));
    _curLine++;
    return arr;
}

function readStringArray() {
    var arr = _inputLines[_curLine]
        .trim(" ")
        .split(" ")
        .filter((str) => str && str.length > 0);
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

module.exports = distanceOfNail;
