/**
 * 72. Возрастает ли список?
 *
 * Дан список. Определите, является ли он монотонно возрастающим (то есть верно ли, что каждый элемент этого
 * списка больше предыдущего).
 *
 * Выведите YES, если массив монотонно возрастает и NO в противном случае.
 */

function isGrowing(list) {
    let result = "NO";

    if (list.length > 1) {
        result = "YES";
        let prevIndex = 0;
        let i = prevIndex + 1;
        while (i < list.length && result === "YES") {
            if (list[prevIndex] >= list[i]) {
                result = "NO";
            }
            prevIndex = i;
            i++;
        }
    }
    return list.length === 1 ? "YES" : result;
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
    const list = readArray();

    const result = isGrowing(list);

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

function readEdges(n) {
    let grid = [];
    for (let i = 0; i < n; i++) {
        let vertex = readArray();
        grid.push(vertex);
    }
    return grid;
}

module.exports = isGrowing;
