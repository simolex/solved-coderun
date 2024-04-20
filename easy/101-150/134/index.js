/**
 * 134. Хорошая строка
 *
 * На день рождения маленький Ипполит получил долгожданный подарок — набор дощечек с написанными на них буквами
 * латинского алфавита. Теперь-то ему будет чем заняться долгими вечерами, тем более что мама обещала подарить ему
 * в следующем году последовательность целых неотрицательных чисел, если он хорошо освоит этот набор. Ради такого
 * богатства Ипполит готов на многое.
 * Прямо сейчас юный исследователь полностью поглощён изучением хорошести строк. Хорошестью строки называется
 * количество позиций от 1 до L - 1 (где L — длина строки), таких, что следующая буква в строке является следующей
 * по алфавиту. Например, хорошесть строки "abcdefghijklmnopqrstuvwxyz" равна 25, а строки "abdc" — только 1.
 * Ипполит размышляет над решением закономерно возникающей задачи: чему равна максимально возможная хорошесть строки,
 * которую можно собрать, используя дощечки из данного набора? Вы-то и поможете ему с ней справиться.
 *
 * Формат ввода:
 * Первая строка ввода содержит единственное целое число N — количество различных букв в наборе (1 ≤ N ≤ 26).
 * Обратите внимание: в наборе всегда используются N первых букв латинского алфавита.
 * Следующие N строк содержат целые положительные числа ci — количество букв соответствующего типа (1 ≤ ci ≤ 10^9).
 * Таким образом, первое число означает количество букв "a", второе число задаёт количество букв "b" и так далее.
 *
 * Формат вывода:
 * Выведите единственное целое число — максимально возможную хорошесть строки, которую можно собрать
 * из имеющихся дощечек.
 *
 * Примечания:
 */

function countGoodString(letters) {
    let result = { count: 0 };
    let level = 0;

    const counting = (prevLevel, fromPos, toPos, objResult) => {
        let currentLevel = letters[fromPos];

        for (let i = fromPos + 1; i < toPos; i++) {
            if (letters[i] < currentLevel) {
                currentLevel = letters[i];
            }
        }
        objResult.count += (currentLevel - prevLevel) * (toPos - fromPos - 1);

        for (let i = fromPos; i < toPos; i++) {
            if (letters[i] === currentLevel) {
                if (i - fromPos > 1) {
                    counting(currentLevel, fromPos, i, objResult);
                }
                fromPos = i + 1;
            }
        }
        if (toPos - fromPos > 1) {
            counting(currentLevel, fromPos, toPos, objResult);
        }
    };

    counting(level, 0, letters.length, result);

    return result.count;
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
    const letters = [];
    for (let i = 0; i < n; i++) {
        letters.push(readInt());
    }

    const result = countGoodString(letters);

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

module.exports = countGoodString;
