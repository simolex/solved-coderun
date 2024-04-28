/**
 * 17. Конвейер
 *
 * Для транспортирования материалов из цеха А в цех В используется конвейер. Материалы упаковываются в одинаковые
 * контейнеры и размещаются на ленте один за одним в порядке изготовления в цехе А. Каждый контейнер имеет степень
 * срочности обработки в цехе В. Для упорядочивания контейнеров по степени срочности используют накопитель,
 * который находится в конце конвейера перед входом в цех В. Накопитель работает пошагово, на каждом шаге возможны
 * следующие действия:
 *
 * накопитель перемещает первый контейнер из ленты в цех В;
 * накопитель перемещает первый контейнер из строки в склад
 *  (в складе каждый следующий контейнер помещается на предыдущий);
 * накопитель перемещает верхний контейнер из склада в цех В.
 * Напишите программу, которая по последовательности контейнеров определит, можно ли упорядочить их по степени
 * срочности пользуясь описанным накопителем.
 *
 * Формат ввода:
 * Входной файл в первой строке содержит количество тестов N. Далее следует N строк, каждый из которых описывает
 * отдельный тест и содержит целое число K (1 ≤ K ≤ 10000) — количество контейнеров в последовательности
 * и K действительных чисел — степеней срочности контейнеров в порядке их поступления из цеха А
 * (меньшим числам соответствует большая степень срочности).
 *
 * Формат вывода:
 * Каждая строка выходного файла должна содержать ответ для одного теста. Необходимо вывести 1, если необходимое
 * упорядочивание возможно, или 0 в противном случае.
 *
 * Примечания:
 */

function conveyor(tests) {
    return tests.map((test) => {
        const stack = [];
        const localResult = [];

        for (let i = 0; i < test.length; i++) {
            if (stack.length > 0 && stack[stack.length - 1] < test[i]) {
                while (stack[stack.length - 1] <= test[i]) {
                    localResult.push(stack.pop());
                }
            }
            stack.push(test[i]);
        }

        while (stack.length > 0) {
            localResult.push(stack.pop());
        }

        for (let i = 1; i < localResult.length; i++) {
            if (localResult[i - 1] > localResult[i]) {
                return 0;
            }
        }

        return 1;
    });
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
    const tests = [];
    for (let i = 0; i < n; i++) {
        tests[i] = readArray();
        tests[i].shift();
    }
    const result = conveyor(tests);

    console.log(result.join("\n"));
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

module.exports = conveyor;
