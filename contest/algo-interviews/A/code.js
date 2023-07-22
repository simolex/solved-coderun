/**
 * Это ваша первая задача. В ней вам придётся прочитать два числа и сложить их.
 * Результат необходимо вывести на стандартный поток вывода или в файл,
 * указанный в условии задачи.
 *
 * Формат ввода:
 * В первой строке задано первое число, во второй – второе.
 * Оба числа лежат в диапазоне от −10^9 до 10^9.
 *
 * Формат вывода:
 * Выведите единственное число – результат сложения двух чисел
 */

const _readline = require("readline");

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

// Установим callback на считывание строки - так мы получим
// все строки из ввода в массиве _inputLines.
_reader.on("line", (line) => {
    _inputLines.push(line);
});

process.stdin.on("end", solve);

// Функция парсит число из очередной строки массива _inputLines
// и сдвигает указатель на единицу вперёд.
function readNumber() {
    return Number(_inputLines[_curLine++]);
}

function getSum(a, b) {
    return a + b;
}

function solve() {
    const a = readNumber();
    const b = readNumber();

    console.log(getSum(a, b));
}
