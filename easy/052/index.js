/**
 *
 * 52. Словарь синонимов
 * Вам дан словарь, состоящий из пар слов. Каждое слово является синонимом к парному ему слову.
 * Все слова в словаре различны. Для одного данного слова определите его синоним.
 *
 * Формат ввода:
 * Программа получает на вход количество пар синонимов N. Далее следует N строк,
 * каждая строка содержит ровно два слова-синонима. После этого следует одно слово.
 *
 * Формат вывода:
 * Программа должна вывести синоним к данному слову.
 */

function getSynonyms(dictionary, word) {
    return dictionary.get(word);
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
    const input = new Map();
    for (let i = 0; i < N; i++) {
        const words = readArray();
        input.set(words[0], words[1]);
        input.set(words[1], words[0]);
    }

    const req = readLine();

    const ans = getSynonyms(input, req);
    console.log(ans);
}

function readArray() {
    var arr = _inputLines[_curLine].trim(" ").split(" ");
    // .map((num) => Number(num));
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

module.exports = getSynonyms;
