/**
 * 1. Ча-ча-ча
 */

function chaChaCha(scores) {
    const allScores = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const mapScore = allScores.split("").reduce((map, s, i) => {
        map.set(s, i + 1);
        return map;
    }, new Map());

    const calc = scores.split("").reduce(
        (res, s) => {
            if (mapScore.get(s) > mapScore.get(res.worst)) {
                res.worst = s;
            }
            res.sum += mapScore.get(s);
            return res;
        },
        { worst: "A", sum: 0 }
    );
    let average = Math.round(calc.sum / scores.length - 10 ** -5);
    if (average + 1 < mapScore.get(calc.worst)) {
        average = mapScore.get(calc.worst) - 1;
    }
    return allScores[average - 1];
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
    const scores = readString();

    const result = chaChaCha(scores);

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

module.exports = chaChaCha;
