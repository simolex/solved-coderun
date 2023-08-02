/**
 * Каждый из N школьников некоторой школы знает M[i]​  языков.
 * Определите, какие языки знают все школьники и языки, которые знает хотя бы один из школьников.
 *
 * Формат ввода:
 * Первая строка входных данных содержит количество школьников N.
 * Далее идет N чисел M[i]​ , после каждого из чисел идет M[i] строк,
 * содержащих названия языков, которые знает i-й школьник.
 * Длина названий языков не превышает 1000 символов, количество различных
 * языков не более 1000. 1≤N≤1000, 1≤M[i​]≤500.
 *
 * Формат вывода:
 * В первой строке выведите количество языков, которые знают все школьники.
 * Начиная со второй строки - список таких языков. Затем - количество языков,
 * которые знает хотя бы один школьник, на следующих строках - список таких языков.
 */

function getPolyglots(languages) {
    const commonLang = new Set();
    const allLang = new Set();

    if (languages.length > 0) {
        for (lang of languages[0]) {
            commonLang.add(lang);
            allLang.add(lang);
        }
    }

    for (let i = 1; i < languages.length; i++) {
        for (lang of commonLang) {
            if (!languages[i].has(lang)) commonLang.delete(lang);
        }
        for (lang of languages[i]) {
            allLang.add(lang);
        }
    }

    let output = commonLang.size + "\n";
    if (commonLang.size > 0) {
        for (lang of commonLang) {
            output += lang + "\n";
        }
    }
    output += allLang.size + "\n";
    if (allLang.size > 0) {
        for (lang of allLang) {
            output += lang + "\n";
        }
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
    const N = readNumber();
    const input = [];
    for (let i = 0; i < N; i++) {
        const child = new Set();
        const M = readNumber();
        for (let j = 0; j < M; j++) {
            child.add(readLine());
        }
        if (child.size > 0) input.push(child);
    }

    const ans = getPolyglots(input);
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

module.exports = getPolyglots;
