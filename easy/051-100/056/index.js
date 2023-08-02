/**
 * 56. Черепахи
 * Широко известна следующая задача для младших школьников. Три черепахи ползут по дороге.
 * Одна черепаха говорит: «Впереди меня две черепахи». Другая черепаха говорит:
 * «Позади меня две черепахи». Третья черепаха говорит: «Впереди меня две черепахи и позади меня две черепахи».
 * Как такое может быть? Ответ: третья черепаха врет!По дороге одна за другой движутся N черепах.
 * Каждая черепаха говорит фразу вида: «Впереди меня a[i]​  черепах, а позади меня b[i]​  черепах».
 * Ваша задача определить, сколько самое большее количество черепах могут говорить правду.
 *
 * Формат ввода:
 * В первой строке вводится целое число N (1≤N≤10000) строк, содержащих целые числа a[i]​  и b[i]​,
 * по модулю не превосходящие 10000, описывающие высказывание i-ой черепахи.
 *
 * Формат вывода:
 * Выведите целое число M — максимальное количество черепах, которые могут говорить правду.
 */

function getTurtles(N, frontBackTurtles) {
    const xSet = new Set();

    for (let i = 0; i < frontBackTurtles.length; i++) {
        if (
            frontBackTurtles[i][0] + frontBackTurtles[i][1] === N - 1 &&
            frontBackTurtles[i][0] >= 0 &&
            frontBackTurtles[i][1] >= 0
        ) {
            xSet.add(`${frontBackTurtles[i][0]}+${frontBackTurtles[i][0]}`);
        }
    }

    return xSet.size;
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
    const N = readNumber();
    const input = [];
    for (let i = 0; i < N; i++) {
        input.push(readArray());
    }

    const ans = getTurtles(N, input);
    console.log(ans);
}

function readArray() {
    var arr = _inputLines[_curLine]
        .trim(" ")
        .split(" ")
        .map((num) => Number(num));
    _curLine++;
    return arr;
}

function readLine() {
    const line = _inputLines[_curLine];
    _curLine++;
    return line.trim();
}

function readNumber() {
    return Number(_inputLines[_curLine++]);
}

// function readStations() {
//     const M = readNumber();
//     let stations = [];
//     for (let i = 0; i < M; i++) {
//         stations.push(readArray());
//     }
//     return stations;
// }

module.exports = getTurtles;
