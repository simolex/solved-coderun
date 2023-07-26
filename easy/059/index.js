/**
 * 59. Количество слов в тексте
 * Во входном файле записан текст (вы можете читать данные из sys.stdin, подключив библиотеку sys).
 * Словом считается последовательность непробельных символов идущих подряд, слова разделены одним
 * или большим числом пробелов или символами конца строки. Определите, сколько различных слов содержится
 * в этом тексте.
 *
 * Формат ввода:
 * Вводится текст.
 *
 * Формат вывода:
 * Выведите ответ на задачу.
 */

function getCountWordsText(text) {
    const xSet = new Set();
    text.forEach((line) => {
        line.forEach((word) => {
            xSet.add(word);
        });
    });

    return xSet.size;
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
