/**
 * 101. Дипломы
 *
 * Когда Петя учился в школе, он часто участвовал в олимпиадах по информатике, математике и физике.
 * Так как он был достаточно способным мальчиком и усердно учился, то на многих из этих олимпиад
 * он получал дипломы. К окончанию школы у него накопилось n дипломов, причём, как оказалось, все
 * они имели одинаковые размеры: w — в ширину и h — в высоту. Сейчас Петя учится в одном из лучших
 * российских университетов и живёт в общежитии со своими одногруппниками. Он решил украсить свою
 * комнату, повесив на одну из стен свои дипломы за школьные олимпиады. Так как к бетонной стене
 * прикрепить дипломы достаточно трудно, то он решил купить специальную доску из пробкового дерева,
 * чтобы прикрепить её к стене, а к ней — дипломы. Для того чтобы эта конструкция выглядела более
 * красиво, Петя хочет, чтобы доска была квадратной и занимала как можно меньше места на стене.
 * Каждый диплом должен быть размещён строго в прямоугольнике размером w на h. Дипломы запрещается
 * поворачивать на 90 градусов. Прямоугольники, соответствующие различным дипломам, не должны иметь
 * общих внутренних точек. Требуется написать программу, которая вычислит минимальный размер стороны
 * доски, которая потребуется Пете для размещения всех своих дипломов.
 *
 * Формат ввода:
 * Входной файл содержит три целых числа: w, h, n (1 ≤ w, h, n ≤ 10^9 ).
 *
 * Формат вывода:
 * В выходной файл необходимо вывести ответ на поставленную задачу.
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

function getDeskSize(w, h, n) {
    const isValid = (size) => {
        const countByWidth = Math.floor(size / w);

        return h * Math.ceil(n / countByWidth) <= size;
    };

    const findSize = leftSearch(1, 10 ** 14, isValid);

    return findSize;
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
    const w = params[0];
    const h = params[1];
    const n = params[2];

    const result = getDeskSize(w, h, n);

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

module.exports = getDeskSize;
