/**
 * 41. Десант
 */

function troop(n, m, mapHeights) {
    let result = 0;
    const map = [];
    const color = Array(n + 2)
        .fill(null)
        .map((_) => Array(m + 2).fill(-1));
    const move = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];
    let stack = [];

    map.push(Array(m + 2).fill(20000));
    for (let i = 0; i < n; i++) {
        map.push(Array(m + 2));
        map[i + 1][0] = map[i + 1][m + 1] = 20000;

        for (let j = 0; j < m; j++) {
            map[i + 1][j + 1] = mapHeights[i][j];
        }
    }
    map.push(Array(m + 2).fill(20000));

    console.log(color, map);

    // const stack = [{ r, c }];

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

    return 0;
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
    const m = params[1];

    const mapHeights = [];

    for (let i = 0; i < n; i++) {
        mapHeights.push(readArray());
    }

    const result = troop(n, m, mapHeights);

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

module.exports = troop;
