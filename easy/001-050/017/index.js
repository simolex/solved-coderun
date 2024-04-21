/**
 * 17. Конвейер
 *
 * Для транспортирования материалов из цеха А в цех В используется конвейер. Материалы упаковываются в одинаковые
 * контейнеры и размещаются на ленте один за одним в порядке изготовления в цехе А. Каждый контейнер имеет степень
 * срочности обработки в цехе В. Для упорядочивания контейнеров по степени срочности используют накопитель,
 * который находится в конце конвейера перед входом в цех В. Накопитель работает пошагово, на каждом шаге возможны
 * следующие действия:
 *
 * накопитель перемещает первый контейнер из ленты в цех В;
 * накопитель перемещает первый контейнер из строки в склад
 *  (в складе каждый следующий контейнер помещается на предыдущий);
 * накопитель перемещает верхний контейнер из склада в цех В.
 * Напишите программу, которая по последовательности контейнеров определит, можно ли упорядочить их по степени
 * срочности пользуясь описанным накопителем.
 *
 * Формат ввода:
 * Входной файл в первой строке содержит количество тестов N. Далее следует N строк, каждый из которых описывает
 * отдельный тест и содержит целое число K (1 ≤ K ≤ 10000) — количество контейнеров в последовательности
 * и K действительных чисел — степеней срочности контейнеров в порядке их поступления из цеха А
 * (меньшим числам соответствует большая степень срочности).
 *
 * Формат вывода:
 * Каждая строка выходного файла должна содержать ответ для одного теста. Необходимо вывести 1, если необходимое
 * упорядочивание возможно, или 0 в противном случае.
 *
 * Примечания:
 */

function SNTP(a, b, c) {
    const timeA = new Date(`1970-01-01T${a}.000Z`);
    const timeB = new Date(`1970-01-01T${b}.000Z`);
    const timeC = new Date(`1970-01-02T${c}.000Z`);
    const oneDay = new Date(`1970-01-02T00:00:00.000Z`);

    const rangeTime = (timeC.getTime() - timeA.getTime()) % oneDay.getTime();
    const resultTime = new Date(timeB.getTime() + Math.round(rangeTime / 2) + 500);

    return resultTime.toISOString().substring(11, 19);
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
    const a = readString();
    const b = readString();
    const c = readString();

    const result = SNTP(a, b, c);

    console.log(result);
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

module.exports = SNTP;
