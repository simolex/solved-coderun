/**
 * 130. Гистограмма
 *
 * Вовочка ломает систему безопасности Пентагона. Для этого ему понадобилось узнать, какие символы
 * в секретных зашифрованных посланиях употребляются чаще других. Для удобства изучения Вовочка
 * хочет получить графическое представление встречаемости символов. Поэтому он хочет построить
 * гистограмму количества символов в сообщении. Гистограмма — это график, в котором каждому символу,
 * встречающемуся в сообщении хотя бы один раз, соответствует столбик, высота которого пропорциональна
 * количеству этих символов в сообщении.
 *
 * Формат ввода:
 * Входной файл содержит зашифрованный текст сообщения. Он содержит строчные и прописные латинские буквы,
 * цифры, знаки препинания («.», «!», «?», «:», «-», «,», «;», «(», «)»), пробелы и переводы строк.
 * Размер входного файла не превышает 10000 байт. Текст содержит хотя бы один непробельный символ.
 * Все строки входного файла не длиннее 200 символов.Для каждого символа c кроме пробелов и переводов строк
 * выведите столбик из символов «#», количество которых должно быть равно количеству символов c в данном тексте.
 * Под каждым столбиком напишите символ, соответствующий ему. Отформатируйте гистограмму так, чтобы нижние концы
 * столбиков были на одной строке, первая строка и первый столбец были непустыми.
 * Не отделяйте столбики друг от друга. Отсортируйте столбики в порядке увеличения кодов символов.
 *
 * Формат вывода:
 * Для каждого символа c кроме пробелов и переводов строк выведите столбик из символов «#», количество которых
 * должно быть равно количеству символов c в данном тексте. Под каждым столбиком напишите символ, соответствующий
 * ему. Отформатируйте гистограмму так, чтобы нижние концы столбиков были на одной строке,
 * первая строка и первый столбец были непустыми. Не отделяйте столбики друг от друга. Отсортируйте столбики
 * в порядке увеличения кодов символов.
 */

function partition(items, left, right) {
    let temp;
    const pivot = items[Math.floor((right + left) / 2)]; //middle element
    while (left <= right) {
        while (items[left] < pivot) {
            left++;
        }
        while (items[right] > pivot) {
            right--;
        }
        if (left <= right) {
            temp = items[left]; //swap two elements
            items[left] = items[right];
            items[right] = temp;

            left++;
            right--;
        }
    }
    return left;
}

function quickSortRecursive(items, left, right) {
    let index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) {
            //more elements on the left side of the pivot
            quickSortRecursive(items, left, index - 1);
        }
        if (index < right) {
            //more elements on the right side of the pivot
            quickSortRecursive(items, index, right);
        }
    }
    return items;
}

function quickSort(items) {
    return quickSortRecursive(items, 0, items.length - 1);
}

function getHistogram(text) {
    let max = 0;
    const xSet = new Map();
    const allowChar = /[a-zA-Z0-9\.\!\?\:\-\,\;\(\)]/;
    text.forEach((line) => {
        line.split("").forEach((litter) => {
            if (allowChar.test(litter)) {
                if (!xSet.has(litter)) {
                    xSet.set(litter, 0);
                }
                xSet.set(litter, xSet.get(litter) + 1);
                max = Math.max(max, xSet.get(litter));
            }
        });
    });

    const histogramChars = quickSort([...xSet.keys()]);
    const output = [];
    let line;
    for (let i = max; i > 0; i--) {
        line = [];
        for (const char of histogramChars) {
            line.push(i > xSet.get(char) ? " " : "#");
        }
        output.push(line.join(""));
    }
    output.push(histogramChars.join(""));

    // const countResult = [];

    // text.forEach((line) => {
    //     line.forEach((word) => {
    //         if (!xSet.has(word)) {
    //             xSet.set(word, 0);
    //         }
    //         countResult.push(xSet.get(word));
    //         xSet.set(word, xSet.get(word) + 1);
    //     });
    // });
    return output;
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

    const ans = getHistogram(txt);
    console.log(ans.join("\n"));
}

function readText() {
    const txt = [];
    while (_curLine < _inputLines.length) {
        const arr = _inputLines[_curLine].trim(" ");
        // .split(" ")
        // .filter((word) => word.length > 0);
        //.map((num) => Number(num));
        _curLine++;
        txt.push(arr);
    }

    return txt;
}

module.exports = getHistogram;
