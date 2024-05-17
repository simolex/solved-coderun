/**
 * 8. Компоненты связности
 */

function connectivityComponents(n, m, edges) {
    const listEdges = Array(n + 1)
        .fill(null)
        .map((v) => new Set());
    const visited = Array(n + 1).fill(-1);

    for (let i = 0; i < m; i++) {
        listEdges[edges[i][0]].add(edges[i][1]);

        listEdges[edges[i][1]].add(edges[i][0]);
    }

    const result = [];
    let nComp = 1;
    for (let i = 1; i <= n; i++) {
        if (visited[i] < 0) {
            const component = [];
            const stack = [i];

            while (stack.length > 0) {
                const v = stack.pop();
                if (visited[v] > 0) {
                    continue;
                }

                visited[v] = nComp;
                component.push(v);

                listEdges[v].forEach((vertex) => {
                    stack.push(vertex);
                });
            }
            result.push(component);
        }
    }

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
    const params = readArray();
    const n = params[0];
    const m = params[1];

    const edges = [];

    for (let i = 0; i < m; i++) {
        edges.push(readArray());
    }

    const result = connectivityComponents(n, m, edges);

    console.log(result.length);
    result.map((c) => {
        console.log(c.length);
        console.log(c.join(" "));
    });
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

module.exports = connectivityComponents;
