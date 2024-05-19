/**
 * 38. Площадь комнаты
 */

function calcArea(n, r, c, edges) {
    const listEdges = edges.map((s) => `#${s}#`.split(""));
    listEdges.unshift(Array(n + 2).fill("#"));
    listEdges.push(Array(n + 2).fill("#"));
    const move = [
        [0, 1],
        // [1, 1],
        [1, 0],
        // [1, -1],
        [0, -1],
        // [-1, -1],
        [-1, 0]
        // [-1, 1]
    ];

    let result = 0;
    const stack = [{ r, c }];

    while (stack.length > 0) {
        const { r, c } = stack.pop();
        if (listEdges[r][c] === "*") {
            continue;
        }

        listEdges[r][c] = "*";
        result++;

        move.forEach((d) => {
            const rd = r + d[0];
            const cd = c + d[1];
            if (listEdges[rd][cd] === ".") {
                stack.push({ r: rd, c: cd });
            }
        });
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
    const n = readInt();
    const edges = [];

    for (let i = 0; i < n; i++) {
        edges.push(readString());
    }
    const [r, c] = readArray();

    const result = calcArea(n, r, c, edges);

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

module.exports = calcArea;
