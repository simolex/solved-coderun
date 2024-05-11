/**
 * 151. Кузнечик
 *
 * У одного из студентов в комнате живёт кузнечик, который очень любит прыгать по клетчатой одномерной доске.
 * Длина доски — N клеток. К его сожалению, он умеет прыгать только на 1, 2, …, k клеток вперёд.
 * Однажды студентам стало интересно, сколькими способами кузнечик может допрыгать из первой клетки
 * до последней. Помогите им ответить на этот вопрос.
 *
 * Формат ввода:
 * В первой и единственной строке входного файла записано два целых числа — N и k .
 *
 * Формат вывода:
 * Выведите одно число — количество способов, которыми кузнечик может допрыгать из первой клетки до последней.
 *
 * Примечания:
 *
 */

function grasshopper(n, k) {
    const dp = new Int32Array(n);

    dp[0] = 0;

    for (let i = 1; i < n; i++) {
        if (i <= k) {
            dp[i] = 1;
        } else {
            dp[i] = 0;
        }
        for (let j = i - k < 0 ? 0 : i - k; j < i; j++) {
            dp[i] += dp[j];
        }
    }

    console.log(dp);

    return n === 1 ? 1 : dp[n - 1];
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
    const k = params[1];

    const result = grasshopper(n, k);

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

module.exports = grasshopper;
