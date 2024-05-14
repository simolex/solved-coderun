/**
 * 5. Кафе
 *
 * Около Петиного университета недавно открылось новое кафе, в котором действует следующая система скидок:
 * при каждой покупке более чем на 100 рублей покупатель получает купон, дающий право на один бесплатный обед
 * (при покупке на сумму 100 рублей и меньше такой купон покупатель не получает).
 * Однажды Пете на глаза попался прейскурант на ближайшие N дней. Внимательно его изучив, он решил, что будет
 * обедать в этом кафе все N дней, причем каждый день он будет покупать в кафе ровно один обед. Однако стипендия
 * у Пети небольшая, и поэтому он хочет по максимуму использовать предоставляемую систему скидок так, чтобы его
 * суммарные затраты были минимальны. Требуется найти минимально возможную суммарную стоимость обедов и номера
 * дней, в которые Пете следует воспользоваться купонами.
 *
 * Формат ввода:
 * В первой строке входного файла записано целое число N (0 ≤ N ≤ 100). В каждой из последующих N строк записано
 * одно целое число, обозначающее стоимость обеда в рублях на соответствующий день. Стоимость — неотрицательное
 * целое число, не превосходящее 300.
 *
 * Формат вывода:
 * В первой строке выдайте минимальную возможную суммарную стоимость обедов. Во второй строке выдайте
 * два числа K1 и K2 — количество купонов, которые останутся неиспользованными у Пети после этих N дней
 * и количество использованных им купонов соответственно.
 * В последующих K2 строках выдайте в возрастающем порядке номера дней, когда Пете следует воспользоваться
 * купонами. Если существует несколько решений с минимальной суммарной стоимостью, то выдайте то из них,
 * в котором значение K1 максимально (на случай, если Петя когда-нибудь ещё решит заглянуть в это кафе).
 * Если таких решений несколько, выведите любое из них.
 *
 * Примечания:
 *
 */

function cafe(n, lunchByDays) {
    const dp = []; // day\coupon
    const maxCoupons = lunchByDays.reduce((count, price) => count + (price > 100 ? 1 : 0), 0);

    dp.push(Array(maxCoupons + 1).fill(Number.POSITIVE_INFINITY));
    dp[0][0] = 0;

    let nowCoupons = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= nowCoupons; j++) {}
    }

    return [0, [], []];
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
    const n = readInt();
    const lunchByDays = [];

    for (let i = 0; i < n; i++) {
        lunchByDays.push(readInt());
    }

    const result = cafe(n, lunchByDays);

    console.log(result[0]);
    console.log(result[1].join(" "));
    console.log(result[2]);
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

module.exports = cafe;
