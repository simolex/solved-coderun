/**
 * 133. Контрольная работа
 *
 * Петя и Вася — одноклассники и лучшие друзья, поэтому они во всём помогают друг другу. Завтра у них контрольная
 * по математике, и учитель подготовил целых K вариантов заданий.
 * В классе стоит один ряд парт, за каждой из них (кроме, возможно, последней) на контрольной будут сидеть ровно
 * два ученика. Ученики знают, что варианты будут раздаваться строго по порядку: правый относительно учителя ученик
 * первой парты получит вариант 1, левый — вариант 2, правый ученик второй парты получит вариант 3 (если число
 * вариантов больше двух) и т.д. Так как K может быть меньше чем число учеников N, то после варианта K снова
 * выдаётся вариант 1. На последней парте в случае нечётного числа учеников используется только место 1.
 * Петя самым первым вошёл в класс и сел на своё любимое место. Вася вошёл следом и хочет получить такой же вариант,
 * что и Петя, при этом сидя к нему как можно ближе. То есть между ними должно оказаться как можно меньше парт,
 * а при наличии двух таких мест с равным расстоянием от Пети Вася сядет позади Пети, а не перед ним. Напишите
 * программу, которая подскажет Васе, какой ряд и какое место (справа или слева от учителя) ему следует выбрать.
 * Если же один и тот же вариант Вася с Петей писать не смогут, то выдайте одно число  -1.
 *
 * Формат ввода:
 * В первой строке входных данных находится количество учеников в классе 2 ≤ N ≤ 109.
 * Во второй строке — количество подготовленных для контрольной вариантов заданий 2 ≤ K ≤ N.
 * В третьей строке — номер ряда, на который уже сел Петя, в четвёртой — цифра 1, если он сел на правое место,
 * и 2, если на левое.
 *
 * Формат вывода:
 * Если Вася никак не сможет писать тот же вариант, что и Петя, то выведите  - 1. Если решение существует,
 * то выведите два числа — номер ряда, на который следует сесть Васе, и 1, если ему надо сесть на правое место,
 * или 2, если на левое. Разрешается использовать только первые N мест в порядке раздачи вариантов.
 *
 * Примечания:
 * В первом примере вариантов 2, поэтому наилучшее место для Васи находится сразу за Петей.
 * Во втором примере Петя будет единственным, кто получит вариант 13.
 */

function testingTask(n, k, row, place) {
    const position = (row - 1) * 2 + place;
    let positionVasya = 0;
    if (position - k > 0) {
        positionVasya = position - k;
    }
    if (
        (positionVasya === 0 ||
            row - Math.floor((positionVasya + 1) / 2) >= Math.floor((position + k + 1) / 2) - row) &&
        position + k <= n
    ) {
        positionVasya = position + k;
    }

    return positionVasya > 0 ? [Math.floor((positionVasya + 1) / 2), ((positionVasya + 1) % 2) + 1] : [];
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
    const n = readInt();

    const k = readInt();
    const row = readInt();
    const place = readInt();

    const result = testingTask(n, k, row, place);

    console.log(result.length > 0 ? result.join(" ") : -1);
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

module.exports = testingTask;
