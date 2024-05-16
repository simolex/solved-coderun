/**
 * 31. Увлекательная игра
 */

function game(n, a, b) {
    const dp = [];
    dp[0] = 0;
    dp[1] = 0;

    if (n === 1) {
        return Math.min(a, b);
    }

    const min = Math.min(a, b);
    if (min == 0) {
        return Math.max(a, b);
    }

    const ansA = Math.min(a, b);
    const ansB = Math.max(a, b);

    for (let i = 2; i <= n; i++) {
        dp[i] = Number.POSITIVE_INFINITY;
        const half = Math.floor(i / 2);
        for (let k = 1; k <= half; k++) {
            const max = Math.max(dp[k] + ansB, dp[i - k] + ansA);
            if (max < dp[i]) {
                dp[i] = max;
            }
        }
    }

    return dp[n];
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
    const n = params[0];
    const a = params[1];
    const b = params[2];

    const result = game(n, a, b);

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

module.exports = game;
