/**
 * 6. НОП с восстановлением ответа
 */

function subsequence(sequence_1, sequence_2) {
    const dp = [];
    const n = sequence_1.length;
    const m = sequence_2.length;

    const delta = [
        [-1, 0],
        [0, -1]
    ];

    dp.push(
        Array(m + 1)
            .fill(null)
            .map((_, i) => i)
    );

    for (let i = 1; i <= n; i++) {
        dp.push([]);
        dp[i][0] = i;
        for (let j = 1; j <= m; j++) {
            if (sequence_1.charAt(i - 1) === sequence_2.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
            dp[i][j] = delta.reduce(
                (min, p) => (dp[i + p[0]][j + p[1]] + 1 < min ? dp[i + p[0]][j + p[1]] + 1 : min),
                dp[i][j]
            );
        }
    }

    return dp[n][m];
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
    const string_1 = readString();
    const string_2 = readString();

    const result = subsequence(string_1, string_2);

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

module.exports = subsequence;
