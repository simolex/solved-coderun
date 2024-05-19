/**
 * 11. Поиск цикла
 */

function cycleSearch(n, edges) {
    const listEdges = Array(n + 1)
        .fill(null)
        .map((_) => new Set());
    const visited = Array(n + 1).fill(-1);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (edges[i][j] > 0) {
                listEdges[i + 1].add(j + 1);
            }
        }
    }

    // for (let i = 1; i <= n; i++) {
    //     for (const j of listEdges[i].values()) {
    //         console.log(`${i} ${j}`);
    //     }
    // }

    const result = [];
    for (let i = 1; i <= n; i++) {
        if (visited[i] < 0) {
            const stack = [{ v: i, p: 0 }];
            while (stack.length > 0) {
                const { v, p } = stack.pop();

                if (visited[v] > 0) {
                    visited[v] = 2;
                    continue;
                }

                stack.push({ v, p });
                visited[v] = 1;
                for (const vertex of listEdges[v].values()) {
                    if (p !== vertex && v !== vertex && visited[vertex] === 1) {
                        result.push(vertex);
                        visited[vertex] = 2;
                        while (stack.length > 0) {
                            const { v: ver } = stack.pop();
                            if (visited[ver] === 1) {
                                result.push(ver);
                            }
                            visited[ver] = 2;

                            if (vertex === ver) {
                                stack.length = 0;
                            }
                        }

                        result.reverse();
                        return result;
                    }
                    if (visited[vertex] < 0) {
                        stack.push({ v: vertex, p: v });
                    }
                }
            }
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
    const n = readInt();

    const edges = [];

    for (let i = 0; i < n; i++) {
        edges.push(readArray());
    }

    const result = cycleSearch(n, edges);

    console.log(result.length > 0 ? `YES\n${result.length}\n${result.join(" ")}` : "NO");
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

module.exports = cycleSearch;
