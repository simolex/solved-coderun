/**
 * 51. Номер появления слова
 *
 * Во входном файле (вы можете читать данные из файла input.txt) записан текст.
 * Словом считается последовательность непробельных символов идущих подряд,
 * слова разделены одним или большим числом пробелов или символами конца строки.
 * Для каждого слова из этого текста подсчитайте, сколько раз оно встречалось в этом тексте ранее.
 *
 * Формат ввода:
 * Вводится текст.
 *
 * Формат вывода:
 * Выведите ответ на задачу.
 */

function getCountWordsText(text) {
    const xSet = new Map();
    const countResult = [];

    text.forEach((line) => {
        line.forEach((word) => {
            if (!xSet.has(word)) {
                xSet.set(word, 0);
            }
            countResult.push(xSet.get(word));
            xSet.set(word, xSet.get(word) + 1);
        });
    });

    return countResult.join(" ");
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
    const txt = readText();

    const ans = getCountWordsText(txt);
    console.log(ans);
}

function readText() {
    const txt = [];
    while (_curLine < _inputLines.length) {
        const arr = _inputLines[_curLine]
            .trim(" ")
            .split(" ")
            .filter((word) => word.length > 0);
        //.map((num) => Number(num));
        _curLine++;
        txt.push(arr);
    }

    return txt;
}

module.exports = getCountWordsText;
