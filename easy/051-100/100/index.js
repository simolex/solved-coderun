/**
 * 100. Приближенный двоичный поиск
 *
 * Для каждого из чисел второй последовательности найдите ближайшее к нему в первой.
 *
 * Формат ввода:
 * В первой строке входных данных содержатся числа N и K (0 < N,K < 100001).
 * Во второй строке задаются �N чисел первого массива, отсортированного по неубыванию,
 * а в третьей строке – K чисел второго массива. Каждое число в обоих массивах по модулю
 * не превосходит 2 ⋅ 10^9
 *
 * Формат вывода:
 * Для каждого из K чисел выведите в отдельную строку число из первого массива, наиболее
 * близкое к данному. Если таких несколько, выведите меньшее из них.
 */
const leftSearch = (l, r, checkFn, ...checkParams) => {
    let m;
    while (l < r) {
        m = l + Math.floor((r - l) / 2);
        if (checkFn(m, ...checkParams)) {
            r = m;
        } else {
            l = m + 1;
        }
    }
    return l;
};

const rightSearch = (l, r, checkFn, ...checkParams) => {
    let m;
    while (l < r) {
        m = l + Math.ceil((r - l) / 2);
        if (checkFn(m, ...checkParams)) {
            l = m;
        } else {
            r = m - 1;
        }
    }
    return l;
};

function approximateBinSearch(n, m, sourceArray, testingArray) {
    const result = [];
    const lenSource = sourceArray.length;

    const getGreater = (index, value) => {
        return sourceArray[index] >= value;
    };

    const getLess = (index, value) => {
        return sourceArray[index] <= value;
    };

    for (let i = 0; i < testingArray.length; i++) {
        const findLess = leftSearch(0, lenSource - 1, getGreater, testingArray[i]);
        const findGreater = rightSearch(0, lenSource - 1, getLess, testingArray[i]);

        if (
            Math.abs(sourceArray[findLess] - testingArray[i]) <
            Math.abs(testingArray[i] - sourceArray[findGreater])
        ) {
            result.push(sourceArray[findLess]);
        } else {
            result.push(sourceArray[findGreater]);
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
    const params = readArray();
    const n = params[0];
    const m = params[1];

    const sourceArray = readArray();
    const testingArray = readArray();

    const result = approximateBinSearch(n, m, sourceArray, testingArray);

    console.log(result.join("\n"));
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

module.exports = approximateBinSearch;
