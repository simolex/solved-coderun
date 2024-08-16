/**
 * 405. Тетрамино
 *
 */

function tetramino(fieldBoard) {
    let result = 0;
    const board = [];

    const tetras = [
        [
            { x: 0, y: 0 },
            { x: -1, y: 0 },
            { x: 1, y: 0 },
            { x: 0, y: 1 }
        ],
        [
            { x: 0, y: 0 },
            { x: -1, y: 0 },
            { x: 1, y: 0 },
            { x: 0, y: -1 }
        ],
        [
            { x: 0, y: 0 },
            { x: 0, y: -1 },
            { x: 0, y: 1 },
            { x: 1, y: 0 }
        ],
        [
            { x: 0, y: 0 },
            { x: 0, y: -1 },
            { x: 0, y: 1 },
            { x: -1, y: 0 }
        ]
    ];

    board.push(Array(10).fill("*"));
    fieldBoard.forEach((line) => {
        board.push(`*${line}*`.split(""));
    });
    board.push(Array(10).fill("*"));
    let isValid;
    let x0, y0;
    for (let i = 1; i <= 8; i++) {
        for (let j = 1; j <= 8; j++) {
            for (let k = 0; k < tetras.length; k++) {
                isValid = true;
                for (let m = 0; m < tetras[k].length; m++) {
                    x0 = j + tetras[k][m].x;
                    y0 = i + tetras[k][m].y;
                    if (board[y0][x0] === "*") {
                        isValid = false;
                        break;
                    }
                }
                if (isValid) result++;
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
    const fieldBoard = Array(8)
        .fill(null)
        .map(() => readString());

    const result = tetramino(fieldBoard);

    console.log(result);
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readArray() {
    var arr = _inputLines[_curLine]
        .trim(" ")
        .split(" ")
        .map((num) => Number(num));
    _curLine++;
    return arr;
}

function readString() {
    const s = _inputLines[_curLine].trim();
    _curLine++;
    return s;
}

module.exports = tetramino;
