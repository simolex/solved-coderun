/**
 * 139. Скучная лекция
 *
 * Лёша сидел на лекции. Ему было невероятно скучно. Голос лектора казался таким далеким и незаметным...
 * Чтобы окончательно не уснуть, он взял листок и написал на нём свое любимое слово. Чуть ниже он повторил
 * своё любимое слово, без первой буквы. Ещё ниже он снова написал своё любимое слово, но в этот раз без двух
 * первых и последней буквы.
 * Тут ему пришла в голову мысль — времени до конца лекции все равно ещё очень много, почему бы не продолжить
 * выписывать всеми возможными способами это слово без какой-то части с начала и какой-то части с конца?
 * После лекции Лёша рассказал Максу, как замечательно он скоротал время. Максу стало интересно посчитать,
 * сколько букв каждого вида встречается у Лёши в листочке. Но к сожалению, сам листочек куда-то запропастился.
 * Макс хорошо знает любимое слово Лёши, а ещё у него не так много свободного времени, как у его друга, так что
 * помогите ему быстро восстановить, сколько раз Лёше пришлось выписать каждую букву.
 *
 * Формат ввода:
 * На вход подаётся строка, состоящая из строчных латинских букв — любимое слово Лёши.
 * Длина строки лежит в пределах от 5 до 100 000 символов.
 *
 * Формат вывода:
 * Для каждой буквы на листочке Лёши, выведите её, а затем через двоеточие и пробел сколько раз она встретилась
 * в выписанных Лёшей словах (см. формат вывода в примерах). Буквы должны следовать в алфавитном порядке.
 * Буквы, не встречающиеся на листочке, выводить не нужно.
 *
 * Примечания:
 * Пояснение к первому примеру. Если любимое Лёшино слово — "hello", то на листочке у Лёши будут выписаны
 * следующие слова:
 *
 * "hello"
 * "hell"
 * "ello"
 * "hel"
 * "ell"
 * "llo"
 * "he"
 * "el"
 * "ll"
 * "lo"
 * "h"
 * "e"
 * "l"
 * "l"
 * "o"
 *
 * Среди этих слов 8 раз встречается буква "e", 5 раз — буква "h", 17 раз — буква "l" и 5 раз буква "o".
 */

function boringLecture(word) {
    const n = word.length;
    const result = {};

    for (let i = 0; i < n; i++) {
        const curLetter = word.charAt(i);
        if (!result[curLetter]) {
            result[curLetter] = 0;
        }
        result[curLetter] += (i + 1) * (n - i);
    }

    return result;
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
    const word = readString();

    const result = boringLecture(word);

    const keys = Object.keys(result);
    keys.sort();
    for (const key of keys) {
        console.log(`${key}: ${result[key]}`);
    }
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

module.exports = boringLecture;
