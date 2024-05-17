/**
 * 34. Космический мусорщик
 */

function spaceScavenger(rules, command, repeat) {
    let result = 0;
    dp = [];

    for (const key in rules) {
        dp[key] = Array(repeat + 1).fill(0);
    }

    for (let i = 0; i < command.length; i++) {
        dp[command.charAt(i)][0]++;
    }

    for (let i = 1; i <= repeat; i++) {
        for (const move in rules) {
            result += dp[move][i - 1];

            if (i < repeat) {
                const nextCommand = rules[move];
                for (let j = 0; j < nextCommand.length; j++) {
                    dp[nextCommand.charAt(j)][i] += dp[move][i - 1];
                }
            }
        }
    }

    return result;
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
    const template = ["N", "S", "W", "E", "U", "D"];
    const rules = template.reduce((obj, direction) => {
        obj[direction] = readString();
        return obj;
    }, {});

    const params = readStringArray();
    const command = params[0];
    const repeats = Number(params[1]);

    const result = spaceScavenger(rules, command, repeats);

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

module.exports = spaceScavenger;
