/**
 * 9. Списывание
 */

function cheating(n, m, edges) {
    const listEdges = Array(n + 1)
        .fill(null)
        .map((v) => new Set());
    const visited = Array(n + 1).fill(-1);

    for (let i = 0; i < m; i++) {
        listEdges[edges[i][0]].add(edges[i][1]);
        listEdges[edges[i][1]].add(edges[i][0]);
    }

    const result = [];
    let colorPaint = 0;
    let prevVertex, saveVertex;
    let isGradiented;
    for (let i = 1; i <= n; i++) {
        if (visited[i] < 0) {
            const component = [];
            const stack = [{ v: i, color: 1 }];
            colorPaint = 1;
            isGradiented = true;
            while (stack.length > 0) {
                let { v, color } = stack.pop();

                if (visited[v] > 0) {
                    continue;
                }

                visited[v] = color;
                color = 3 - color;

                listEdges[v].forEach((vertex) => {
                    if (visited[vertex] < 0) {
                        stack.push({ v: vertex, color });
                    } else if (visited[vertex] !== color) {
                        isGradiented = false;
                    }
                });
            }
            result.push(isGradiented);
        }
    }

    return result.reduce((res, flag) => flag && res, true);
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

    const edges = [];

    for (let i = 0; i < m; i++) {
        edges.push(readArray());
    }

    const result = cheating(n, m, edges);
    console.log(result ? "YES" : "NO");
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

module.exports = cheating;
