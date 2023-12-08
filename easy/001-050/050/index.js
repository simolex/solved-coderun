/**
 * 50. Самое частое слово
 *
 * Дан текст. Выведите слово, которое в этом тексте встречается чаще всего.
 * Если таких слов несколько, выведите то, которое меньше в лексикографическом порядке.
 *
 * Формат ввода:
 * Вводится текст.
 *
 * Формат вывода:
 * Выведите ответ на задачу.
 */

function getCountWordsText(text) {
    const xSet = new Map();
    let max = 0;
    text.forEach((line) => {
        line.forEach((word) => {
            if (!xSet.has(word)) {
                xSet.set(word, 0);
            }
            xSet.set(word, xSet.get(word) + 1);
            max = Math.max(max, xSet.get(word));
        });
    });
    const maxResult = [];
    for (const [key, value] of xSet.entries()) {
        if (value === max) maxResult.push(key);
    }
    maxResult.sort((a, b) => (a > b ? 1 : -1));
    return maxResult[0];
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
