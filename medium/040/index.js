/**
 * 40. Радио Байтик
 */

function radioBatic(towers) {
    const n = towers.length;
    const distances = [];
    const isGradientable = (R2) => {
        let isGradiented;
        let stack;
        const visited = Array(n).fill(-1);
        const result = [];

        for (let i = 0; i < n; i++) {
            if (visited[i] < 0) {
                isGradiented = true;
                stack = [{ v: i, color: 1 }];

                while (stack.length > 0) {
                    let { v, color } = stack.pop();

                    if (visited[v] > 0) {
                        continue;
                    }

                    visited[v] = color;
                    color = 3 - color;

                    for (let to = 0; to < n; to++) {
                        if (distances[v][to] < R2) {
                            if (visited[to] < 0) {
                                stack.push({ v: to, color });
                            } else if (visited[to] !== color) {
                                isGradiented = false;
                            }
                        }
                    }
                }
                result.push(isGradiented);
            }
        }
        const rr = result.reduce((res, flag) => flag && res, true);
        return rr ? { result: rr, colors: visited } : { result: rr };
    };

    const getDistance = (ic, jc) => {
        const dx = towers[ic][0] - towers[jc][0];
        const dy = towers[ic][1] - towers[jc][1];
        return (dx * dx + dy * dy) / 4;
    };

    for (let i = 0; i < n; i++) {
        distances[i] = new Float64Array(n).fill(Number.POSITIVE_INFINITY);
    }

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            distances[i][j] = getDistance(i, j);
            distances[j][i] = getDistance(j, i);
        }
    }

    let l = 0;
    let r = 2 * 10 ** 8;

    const delta = 10 ** -9;

    let m;
    while (l < r && Math.abs(r - l) >= delta) {
        m = l + (r - l) / 2;
        if (isGradientable(m).result) {
            l = m;
        } else {
            r = m;
        }
    }

    return [Math.sqrt(l), isGradientable(l).colors];
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
    const n = readInt();

    const towers = [];

    for (let i = 0; i < n; i++) {
        towers.push(readArray());
    }

    const result = radioBatic(towers);

    console.log(result[0]);
    console.log(result[1].join(" "));
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

module.exports = radioBatic;
