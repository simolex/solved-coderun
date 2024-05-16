/**
 * 32. Ход конём - 2
 */

function knightMove_v2(n, m) {
    const dp = [];
    for (let i = 0; i < n; i++) {
        dp.push([]);
    }

    const move = [
        [1, -2],
        [-2, 1],
        [-1, -2],
        [-2, -1]
    ];
    const countMove = move.length;

    const getValue = (ci, cj) => (ci >= 0 && ci < n && cj >= 0 && cj < m ? dp[ci][cj] : 0n);

    dp[0][0] = 1n;

    for (let i = 2; i < n + m; i++) {
        const from = Math.max(0, i - n);
        const to = Math.min(i, m);
        for (let j = from; j < to; j++) {
            const ii = i - j - 1;
            dp[ii][j] = 0n;
            for (let k = 0; k < countMove; k++) {
                di = ii + move[k][0];
                dj = j + move[k][1];

                dp[ii][j] += getValue(di, dj);
            }
        }
    }
    return dp[n - 1][m - 1].toString();
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
    const m = params[1];

    const result = knightMove_v2(n, m);

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

module.exports = knightMove_v2;
