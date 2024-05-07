/**
 * 20. Гистограмма и прямоугольник
 *
 * Гистограмма является многоугольником, сформированным из последовательности прямоугольников, выровненных
 * на общей базовой линии. Прямоугольники имеют равную ширину, но могут иметь различные высоты. Например,
 * фигура слева показывает гистограмму, которая состоит из прямоугольников с высотами 2, 1, 4, 5, 1, 3, 3.
 * Все прямоугольники на этом рисунке имеют ширину, равную 1.
 *
 * [image.png]
 *
 * Обычно гистограммы используются для представления дискретных распределений, например, частоты символов
 * в текстах. Отметьте, что порядок прямоугольников очень важен. Вычислите область самого большого
 * прямоугольника в гистограмме, который также находится на общей базовой линии. На рисунке справа
 * заштрихованная фигура является самым большим выровненным прямоугольником на изображенной гистограмме.
 *
 * Формат ввода:
 * В первой строке входного файла записано число N (0 < N ≤ 10^6) — количество прямоугольников гистограммы.
 * Затем следует N целых чисел h[1],...,h[n], где 0 ≤ h[i] ≤ 10^9. Эти числа обозначают высоты прямоугольников
 * гистограммы слева направо. Ширина каждого прямоугольника равна 1
 *
 * Формат вывода:
 * Выведите площадь самого большого прямоугольника в гистограмме. Помните, что этот прямоугольник должен быть
 * на общей базовой линии.
 *
 * Примечания:
 */

function maxRectangle(levels) {
    const n = levels[0];
    levels.shift();

    const stack = [];
    let maxSquare = 0;

    for (let i = 0; i < n; i++) {
        let count = 0;
        let minLevel = Number.MAX_SAFE_INTEGER;
        while (stack.length > 0 && stack[stack.length - 1].level > levels[i]) {
            const gist = stack.pop();
            count += gist.width;
            minLevel = Math.min(minLevel, gist.level);
            maxSquare = Math.max(maxSquare, gist.width * gist.level);
            maxSquare = Math.max(maxSquare, count * minLevel);
        }
        if (count > 0) {
            stack.push({ level: minLevel, width: count });
        }
        stack.push({ level: levels[i], width: 1 });
    }

    let count = 0;
    let minLevel = Number.MAX_SAFE_INTEGER;
    while (stack.length > 0) {
        const gist = stack.pop();
        count += gist.width;
        minLevel = Math.min(minLevel, gist.level);
        maxSquare = Math.max(maxSquare, gist.width * gist.level);
        maxSquare = Math.max(maxSquare, count * minLevel);
    }
    maxSquare = Math.max(maxSquare, count * minLevel);

    return maxSquare;
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
    const levels = readArray();

    const result = maxRectangle(levels);

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

module.exports = maxRectangle;
