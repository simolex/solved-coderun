/**
 * 109. Медиана объединения-2
 *
 * Дано N упорядоченных по неубыванию последовательностей целых чисел (т.е. каждый следующий элемент больше либо равен
 * предыдущему), в каждой из последовательностей ровно L элементов. Для каждых двух последовательностей выполняют
 * следующую операцию: объединяют их элементы (в объединенной последовательности каждое число будет идти столько раз,
 * сколько раз оно встречалось суммарно в объединяемых последовательностях), упорядочивают их по неубыванию и смотрят,
 * какой элемент в этой последовательности из 2L элементов окажется на месте номер L (этот элемент называют левой медианой).
 * Напишите программу, которая для каждой пары последовательностей выведет левую медиану их объединения.
 *
 * Формат ввода:
 * Сначала вводятся числа N и L (2 ≤ N ≤ 200, 1 ≤ L ≤ 50000). В следующих N строках задаются параметры, определяющие
 * последовательности.
 * Каждая последовательность определяется пятью целочисленными параметрами: x1, d1, a, c, m. Элементы последовательности
 * вычисляются по следующим формулам: x1 нам задано, а для всех i от 2 до L: xi = xi–1+di–1. Последовательность di
 * определяется следующим образом: d1 нам задано, а для i ≥ 2 di = ((a*di–1+c) mod m), где mod – операция получения
 * остатка от деления (a*di–1+c) на m.
 * Для всех последовательностей выполнены следующие ограничения: 1 ≤ m ≤ 40000, 0 ≤ a < m, 0≤c<m, 0≤d1<m. Гарантируется,
 * что все члены всех последовательностей по модулю не превышают 109.
 *
 * Формат вывода:
 * В первой строке выведите медиану объединения 1-й и 2-й последовательностей,
 * во второй строке — объединения 1-й и 3-й,
 * и так далее, в (N‑1)-ой строке — объединения 1-й и N-ой последовательностей,
 * далее медиану объединения 2-й и 3-й, 2-й и 4-й, и т.д. до 2-й и N-ой, затем 3-й и 4-й и так далее.
 * В последней строке должна быть выведена медиана объединения (N–1)-й и N-ой последовательностей.
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
 * @param {Array<Array<Number>>} setOfParams[][]   Рост ученика — натуральное число, не превышающее 1 000 000 000
 * @returns Array<Number>
 */
function getMedianUnion_2(N, L, setOfParams) {
    const result = [];

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

    const setOfParams = [];
    for (let i = 0; i < N; i++) {
        setOfParams.push(readArray());
    }

    const result = getMedianUnion_2(N, L, setOfParams);

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

module.exports = getMedianUnion_2;
