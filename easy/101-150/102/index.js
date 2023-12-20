/**
 * 102. Космическое поселение
 *
 * Для освоения Марса требуется построить исследовательскую базу. База должна состоять
 * из n одинаковых модулей, каждый из которых представляет собой прямоугольник.
 * Каждый модуль представляет собой жилой отсек, который имеет форму прямоугольника
 * размером a на b метров. Для повышения надёжности модулей инженеры могут добавить вокруг
 * каждого модуля слой дополнительной защиты. Толщина этого слоя должна составлять целое
 * число метров, и все модули должны иметь одинаковую толщину дополнительной защиты.
 * Модуль с защитой, толщина которой равна d метрам, будет иметь форму прямоугольника
 * размером (a+2d)(b+2d) метров.
 * Все модули должны быть расположены на заранее подготовленном прямоугольном поле размером
 * wh метров. При этом они должны быть организованы в виде регулярной сетки: их стороны
 * должны быть параллельны сторонам поля, и модули должны быть ориентированы одинаково.
 * Требуется написать программу, которая по заданным количеству и размеру модулей,
 * а также размеру поля для их размещения, определяет максимальную толщину слоя дополнительной
 * защиты, который можно добавить к каждому модулю.
 *
 * Формат ввода:
 * Входной файл содержит пять разделенных пробелами целых чисел:
 * n, a, b, w и h (1 ≤ n, a, b, w, h ≤ 1018). Гарантируется, что без дополнительной защиты
 * все модули можно разместить в поселении описанным образом.
 *
 * Формат вывода:
 * Выходной файл должен содержать одно целое число: максимальную возможную толщину
 * дополнительной защиты. Если дополнительную защиту установить не удастся, требуется
 * вывести число 0.
 *
 * Примечание:
 * Для входных данных 11 3 2 21 25 можно установить дополнительную защиту толщиной 2 метра
 * и разместить модули на поле, как показано на рисунке.
 *
 */
const leftSearch = (l, r, checkFn, ...checkParams) => {
    let m;
    while (l < r) {
        m = l + (r - l) / 2n;
        if (checkFn(m, ...checkParams)) {
            r = m;
        } else {
            l = m + 1n;
        }
    }
    return l;
};

const rightSearch = (l, r, checkFn, ...checkParams) => {
    let m;
    while (l < r) {
        m = l + (r - l + 1n) / 2n;
        if (checkFn(m, ...checkParams)) {
            l = m;
        } else {
            r = m - 1n;
        }
    }
    return l;
};

function getDefenseSize(n, a, b, w, h) {
    const isValid = (defenseSize, nowA, nowB) => {
        const defA = nowA + 2n * defenseSize;
        const defB = nowB + 2n * defenseSize;
        const countByWidth = w / defA;
        if (countByWidth > 0n) {
            return defB * ((n + countByWidth - 1n) / countByWidth) <= h;
        } else {
            return false;
        }
    };

    const size_1 = rightSearch(0n, 10n ** 18n, isValid, a, b);
    const size_2 = rightSearch(0n, 10n ** 18n, isValid, b, a);

    return size_1 > size_2 ? size_1 : size_2;
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
    const a = params[1];
    const b = params[2];
    const w = params[3];
    const h = params[4];

    const result = getDefenseSize(n, a, b, w, h);

    console.log(result.toString());
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
        .map((num) => BigInt(num));
    _curLine++;
    return arr;
}

function readString() {
    const s = _inputLines[_curLine].trim();
    _curLine++;
    return s;
}

module.exports = getDefenseSize;
