/**
 * 72. Возрастает ли список?
 *
 * По последовательности чисел во входных данных определите ее вид:
 * CONSTANT – последовательность состоит из одинаковых значений
 * ASCENDING – последовательность является строго возрастающей
 * WEAKLY ASCENDING – последовательность является нестрого возрастающей
 * DESCENDING – последовательность является строго убывающей
 * WEAKLY DESCENDING – последовательность является нестрого убывающей
 * RANDOM – последовательность не принадлежит ни к одному из вышеупомянутых типов
 *
 * Формат ввода
 * По одному на строке поступают числа последовательности ai, |ai| ≤ 10^9.
 * Признаком окончания последовательности является число -2×10^9.
 * Оно в последовательность не входит.
 *
 * Формат вывода
 * В единственной строке выведите тип последовательности.
 */

marker = {
    CONSTANT: 2 ** 0,
    ASCEND: 2 ** 1,
    DESCEND: 2 ** 2
};

type = {
    1: "CONSTANT",
    2: "ASCENDING",
    3: "WEAKLY ASCENDING",
    4: "DESCENDING",
    5: "WEAKLY DESCENDING",
    6: "RANDOM",
    7: "RANDOM"
};

function getTypeSequence(list) {
    let result = 0;

    for (let i = 1; i < list.length; i++) {
        switch (true) {
            case list[i - 1] < list[i]:
                result |= marker.ASCEND;
                break;
            case list[i - 1] === list[i]:
                result |= marker.CONSTANT;
                break;
            case list[i - 1] > list[i]:
                result |= marker.DESCEND;
                break;
        }
    }
    return list.length === 1 ? "CONSTANT" : type[result];
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
    const list = [];
    const EOS = -2 * 10 ** 9;

    let item = readInt();
    while (item !== EOS) {
        list.push(item);
        item = readInt();
    }

    const result = getTypeSequence(list);

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

module.exports = getTypeSequence;
