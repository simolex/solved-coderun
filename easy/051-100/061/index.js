/**
 *
 * 61. Пересечение множеств
 *
 * Даны два списка чисел, которые могут содержать до 10000 чисел каждый.
 * Выведите все числа, которые входят как в первый, так и во второй список
 * в порядке возрастания. Примечание. И даже эту задачу на Питоне можно решить в одну строчку.
 *
 * Формат ввода:
 * Вводятся два списка целых чисел. Все числа каждого списка находятся на отдельной строке.
 *
 * Формат вывода:
 * Выведите ответ на задачу.
 *
 */

function sortOfSet(data) {
    const arr = Array.from(data);
    arr.sort((a, b) => a - b);
    return arr.join(" ");
}

function getIntersection(setOfNums) {
    const intersectionSets = new Set();
    for (const num of setOfNums[0]) {
        if (setOfNums[1].has(num)) {
            intersectionSets.add(num);
        }
    }
    let output = "";
    if (intersectionSets.size > 0) {
        output += sortOfSet(intersectionSets) + "\n";
    }

    return output;
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
    const setsOfNumber = [];
    for (let i = 0; i < 2; i++) {
        const set = readArray();
        const child = new Set();
        set.forEach((n) => child.add(n));

        setsOfNumber.push(child);
    }

    const ans = getIntersection(setsOfNumber);
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

module.exports = getIntersection;
