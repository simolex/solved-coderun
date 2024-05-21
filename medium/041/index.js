/**
 * 41. Десант
 */

const colorType = {
    noVisited: 0,
    inFlow: 1,
    outFlow: 2,
    unknown: 3,
};

const move = [
    { delta: [0, 1] },
    // { delta: [1, 1] },
    { delta: [1, 0] },
    // { delta: [1, -1] },
    { delta: [0, -1] },
    // { delta: [-1, -1] },
    { delta: [-1, 0] },
    // { delta: [-1, 1] },
];

function troop(n, m, mapHeights) {
    let result = 0;
    const map = [];
    let color = [];

    color.push(Array(m + 2).fill(colorType.outFlow));
    Array(n)
        .fill(null)
        .map((_) =>
            color.push(
                Array(m + 2)
                    .fill(colorType.noVisited)
                    .fill(colorType.outFlow, 0, 1)
                    .fill(colorType.outFlow, -1)
            )
        );
    color.push(Array(m + 2).fill(colorType.outFlow));

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

    let preResult = [];

    let rMin, cMin;

    for (let r = 1; r <= n + 1; r++) {
        for (let c = 1; c <= m + 1; c++) {
            if (color[r][c] === colorType.noVisited) {
                result++;
                stack = [{ r, c }];
                rMin = 0;
                cMin = 0;

                while (stack.length > 0) {
                    const { r, c } = stack.pop();
                    if (color[r][c] > colorType.noVisited) {
                        continue;
                    }

                    color[r][c] = result;
                    if (map[rMin][cMin] > map[r][c]) {
                        rMin = r;
                        cMin = c;
                    }
                    move.forEach(({ delta }) => {
                        const rd = r + delta[0];
                        const cd = c + delta[1];

                        if (
                            rd > 0 &&
                            cd > 0 &&
                            rd <= n &&
                            cd <= m &&
                            color[rd][cd] === colorType.noVisited &&
                            map[r][c] <= map[rd][cd]
                        ) {
                            stack.push({ r: rd, c: cd });
                        }
                    });
                }
                preResult.push({ r: rMin, c: cMin });
            }
        }
    }

    preResult.sort((a, b) => map[b.r][b.c] - map[a.r][a.c]);

    color = [];
    color.push(Array(m + 2).fill(colorType.outFlow));
    Array(n)
        .fill(null)
        .map((_) =>
            color.push(
                Array(m + 2)
                    .fill(colorType.noVisited)
                    .fill(colorType.outFlow, 0, 1)
                    .fill(colorType.outFlow, -1)
            )
        );
    color.push(Array(m + 2).fill(colorType.outFlow));

    for (let i = 0; i < preResult.length; i++) {
        const { r, c } = preResult[i];
        if (color[r][c] === colorType.noVisited) {
            result++;
            stack = [{ r, c }];
            rMin = 0;
            cMin = 0;

            while (stack.length > 0) {
                const { r, c } = stack.pop();
                if (color[r][c] === result) {
                    continue;
                }

                color[r][c] = result;

                move.forEach(({ delta }) => {
                    const rd = r + delta[0];
                    const cd = c + delta[1];

                    if (
                        rd > 0 &&
                        cd > 0 &&
                        rd <= n &&
                        cd <= m &&
                        color[rd][cd] < color[r][c] &&
                        map[r][c] <= map[rd][cd]
                    ) {
                        stack.push({ r: rd, c: cd });
                    }
                });
            }
        }
    }

    result = new Set();
    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= m; c++) {
            result.add(color[r][c]);
        }
    }

    return result.size;
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
