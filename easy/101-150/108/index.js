/**
 * 108. Медиана объединения
 *
 * Дано N упорядоченных по неубыванию последовательностей целых чисел (т.е. каждый следующий элемент больше либо
 * равен предыдущему), в каждой из последовательностей ровно L элементов. Для каждых двух последовательностей
 * выполняют следующую операцию: объединяют их элементы (в объединенной последовательности каждое число будет идти
 * столько раз, сколько раз оно встречалось суммарно в объединяемых последовательностях), упорядочивают их по неубыванию
 * и смотрят, какой элемент в этой последовательности из 2L элементов окажется на месте номер L (этот элемент называют
 * левой медианой).
 * Напишите программу, которая для каждой пары последовательностей выведет левую медиану их объединения.
 *
 * Формат ввода:
 * Сначала вводятся числа N и L (2 ≤ N ≤ 100, 1 ≤ L ≤ 300). В следующих N строках задаются последовательности.
 * Каждая последовательность состоит из L чисел, по модулю не превышающих 30000.
 *
 * Формат вывода:
 * В первой строке выведите медиану объединения 1-й и 2-й последовательностей, во второй строке — объединения 1-й и 3-й,
 * и так далее, в (N‑1)-ой строке — объединения 1-й и N-ой последовательностей,
 * далее медиану объединения 2-й и 3-й, 2-й и 4-й, и т.д. до 2-й и N-ой,
 * затем 3-й и 4-й и так далее.
 * В последней строке должна быть выведена медиана объединения (N–1)-й и N-ой последовательностей.
 *
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

/**
 *
 * @param {Number} N    количество последовательностей
 * @param {Number} L    длина последовательности
 * @param {Array<Array<Number>>} setOfNumbers[][]   Рост ученика — натуральное число, не превышающее 1 000 000 000
 * @returns Array<Number>
 */
function getMedianUnion(N, L, setOfNumbers) {
    const result = [];
    for (let i = 0; i < N - 1; i++) {
        for (let j = i + 1; j < N; j++) {
            let curNum;
            let firstPtr = 0;
            let seconPtr = 0;
            const firstSet = setOfNumbers[i];
            const secondSet = setOfNumbers[j];

            for (let k = 0; k < L; k++) {
                if (firstSet[firstPtr] < secondSet[seconPtr]) {
                    curNum = firstSet[firstPtr];
                    firstPtr++;
                } else {
                    curNum = secondSet[seconPtr];
                    seconPtr++;
                }
            }
            result.push(curNum);
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
    const N = params[0];
    const L = params[1];

    const setOfNumbers = [];
    for (let i = 0; i < N; i++) {
        setOfNumbers.push(readArray());
    }

    const result = getMedianUnion(N, L, setOfNumbers);

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

module.exports = getMedianUnion;
