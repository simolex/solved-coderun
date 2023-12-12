/**
 * 97. Робот
 *
 * Студенты одного из вузов спроектировали робота для частичной автоматизации процесса сборки авиационного двигателя.
 * В процессе сборки двигателя могут встречаться операции 26 типов, которые обозначаются строчными буквами латинского
 * алфавита. Процесс сборки состоит из N операций.
 * Предполагается использовать робота один раз для выполнения части подряд идущих операций из процесса сборки.
 * Память робота состоит из K ячеек, каждая из которых содержит одну операцию. Операции выполняются последовательно,
 * начиная с первой, в том порядке, в котором они расположены в памяти. Выполнив последнюю из них, робот продолжает
 * работу с первой. Робота можно остановить после любой операции. Использование робота экономически целесообразно, если
 * он выполнит хотя бы K + 1 операцию.
 * Требуется написать программу, которая по заданному процессу сборки определит количество экономически целесообразных
 * способов использования робота.
 *
 * Формат ввода:
 * В первой строке входного файла записано число K > 0 — количество операций, которые можно записать в память робота.
 * Вторая строка состоит из N > K строчных латинских букв, обозначающих операции — процесс сборки двигателя.
 * Операции одного и того же типа обозначаются одной и той же буквой. N ≤ 200000
 *
 * Формат вывода:
 * Выходной файл должен содержать единственное целое число — количество экономически целесообразных способов
 * использования робота.
 */

function nViableRobot(k, inString) {
    const arrString = inString.split("");
    const n = arrString.length;
    let equalCount = 0;
    let count = 0;

    for (let left = k; left < n; left++) {
        if (arrString[left] === arrString[left - k]) {
            equalCount++;
            count += equalCount;
        } else equalCount = 0;
    }
    return count;
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
    const k = readInt();
    const inString = readString();

    const result = nViableRobot(k, inString);

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

module.exports = nViableRobot;
