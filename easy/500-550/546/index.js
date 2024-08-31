/**
 * 546. Покрытие K отрезками
 */

function kSegments(n, k, xPoints) {
    xPoints.sort((a, b) => a - b);

    const canCoverage = (sizeSegment) => {
        let usedSegments = 0;

        let startIndex = 0;
        let endIndex = xPoints.length - 1;
        let l, r, m;

        while (startIndex < endIndex) {
            usedSegments++;
            l = startIndex;
            r = endIndex;

            while (l < r) {
                m = l + Math.ceil((r - l) / 2);
                if (xPoints[m] - xPoints[startIndex] > sizeSegment) {
                    r = m - 1;
                } else {
                    l = m;
                }
            }
            startIndex = l + 1;
        }
        if (startIndex === endIndex) usedSegments++;

        return usedSegments <= k;
    };

    let mSegment;
    let lSegment = 0;
    let rSegment = 2 * 10 ** 9;

    while (lSegment < rSegment) {
        mSegment = lSegment + Math.floor((rSegment - lSegment) / 2);

        if (canCoverage(mSegment)) {
            rSegment = mSegment;
        } else {
            lSegment = mSegment + 1;
        }
    }
    return lSegment;
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

    const xPoints = readArray();

    const result = kSegments(n, k, xPoints);

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

module.exports = kSegments;
