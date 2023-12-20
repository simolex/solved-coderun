/**
 * 107. Субботник
 *
 * В классе учатся N человек. Классный руководитель получил указание направить на субботник R бригад по С человек
 * в каждой.
 * Все бригады на субботнике будут заниматься переноской брёвен. Каждое бревно одновременно несут все члены одной
 * бригады. При этом бревно нести тем удобнее, чем меньше различается рост членов этой бригады.
 * Числом неудобства бригады будем называть разность между ростом самого высокого и ростом самого низкого членов
 * этой бригады (если в бригаде только один человек, то эта разница равна 0). Классный руководитель решил сформировать
 * бригады так, чтобы максимальное из чисел неудобства сформированных бригад было минимально. Помогите ему в этом!
 * Рассмотрим следующий пример. Пусть в классе 8 человек, рост которых в сантиметрах
 * равен 170, 205, 225, 190, 260, 130, 225, 160, и необходимо сформировать две бригады по три человека в каждой.
 * Тогда одним из вариантов является такой:
 * 1 бригада: люди с ростом 225, 205, 225
 * 2 бригада: люди с ростом 160, 190, 170
 * При этом число неудобства первой бригады будет равно 20, а число неудобства второй — 30. Максимальное из чисел
 * неудобств будет 30, и это будет наилучший возможный результат.
 *
 * Формат ввода:
 * Сначала вводятся натуральные числа N, R и C — количество человек в классе, количество бригад и количество человек
 * в каждой бригаде (1 ≤ R∙C ≤ N ≤ 100000). Далее вводятся N целых чисел — рост каждого из N учеников.
 * Рост ученика — натуральное число, не превышающее 1000000000.
 *
 * Формат вывода:
 * Выведите одно число — наименьше возможное значение максимального числа неудобства сформированных бригад.
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

function minDiscomfort(N, K, segments) {
    // let maxLength = segments.reduce((max, w) => Math.max(max, w), 0);
    // const isValid = (length) => {
    //     return segments.reduce((sum, w) => sum + Math.floor(w / length), 0) >= K;
    // };
    // const lengthSegment = rightSearch(0, maxLength, isValid);
    // return lengthSegment;
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
    const params = readArray();
    const N = params[0];
    const R = params[1];
    const C = params[1];

    const heights = [];
    for (let i = 0; i < N; i++) {
        heights.push(readInt());
    }

    const result = minDiscomfort(N, R, C, heights);

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

module.exports = minDiscomfort;
