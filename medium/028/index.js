/**
 * 28. НВП с восстановлением ответа
 *
 * Дана последовательность, требуется найти её наибольшую возрастающую подпоследовательность.
 * Напомним:
 * Последовательность x называется подпоследовательностью последовательности y,
 * если x получается из y удалением нескольких (возможно, нуля или всех) элементов.
 * Наибольшая возрастающая подпоследовательность - строго возрастающая подпоследовательность наибольшей длины.
 *
 * Формат ввода:
 * В первой строке входных данных задано число N — длина последовательности (1 ≤ N ≤ 1000).
 * Во второй строке задается сама последовательность (разделитель — пробел).
 * Элементы последовательности — целые числа, не превосходящие 10000 по модулю.
 *
 * Формат вывода:
 * Требуется вывести наибольшую возрастающую подпоследовательность данной последовательности.
 * Если таких подпоследовательностей несколько, необходимо вывести одну (любую) из них.
 *
 * Примечания:
 * Решение за O(n^2)
 * TODO за O(n log n)
 */

function certificationLIS(sequence) {
    const n = sequence.length;
    const dp = new Int16Array(n);
    const cert = new Int16Array(n);
    const result = [];

    dp[0] = 1;
    cert[0] = -1;

    let tailIndex = 0;

    for (let i = 1; i < n; i++) {
        dp[i] = 0;
        for (let j = 0; j < i; j++) {
            if (sequence[j] < sequence[i] && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1;
                cert[i] = j;
            }
        }
        if (dp[i] === 0) {
            dp[i] = 1;
            cert[i] = -1;
        }
        if (dp[tailIndex] < dp[i]) {
            tailIndex = i;
        }
    }

    while (tailIndex >= 0) {
        result.push(sequence[tailIndex]);
        tailIndex = cert[tailIndex];
    }

    result.reverse();
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
    const n = readInt();
    const sequence = readArray();

    const result = certificationLIS(sequence);

    console.log(result.join(" "));
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

module.exports = certificationLIS;
