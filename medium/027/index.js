/**
 * 27. Разложение в сумму кубов
 *
 * Дано натуральное число N. Необходимо представить его в виде суммы точных кубов, содержащей наименьшее число
 * слагаемых. Программа должна вывести это число слагаемых.
 *
 * Формат ввода:
 * Программа получает на вход натуральное число N, не превосходящее 10^6
 *
 * Формат вывода:
 * Программа должна вывести единственное натуральное число
 *
 * Примечания:
 */

function sumOfCubes(n) {
    const dp = new Uint8Array(n + 1);
    dp[0] = 10 ** 8;
    dp[1] = 1;
    const cubes = [1];
    for (let k = 1; k <= Math.ceil(Math.pow(n, 1 / 3)); k++) {
        cubes[k] = (k + 1) * (k + 1) * (k + 1);
        dp[cubes[k]] = 1;
        for (let i = cubes[k - 1] + 1; i < cubes[k]; i++) {
            dp[i] = 2 ** 8 - 1;
            for (let j = 0; j < cubes.length; j++) {
                if (cubes[j] < i && dp[i] > dp[cubes[j]] + dp[i - cubes[j]]) {
                    dp[i] = dp[cubes[j]] + dp[i - cubes[j]];
                }
            }
            if (i === n) {
                return dp[n];
            }
        }
    }
    return dp[n];
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

    const result = sumOfCubes(n);

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

module.exports = sumOfCubes;
