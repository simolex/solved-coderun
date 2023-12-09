/**
 * 90. Стильная одежда
 *
 * Глеб обожает шоппинг. Как-то раз он загорелся идеей подобрать себе майку и штаны так, чтобы выглядеть в них
 * максимально стильно. В понимании Глеба стильность одежды тем больше, чем меньше разница в цвете элементов его
 * одежды.
 * В наличии имеется N (1 ≤ N ≤ 100 000) маек и M (1 ≤ M ≤ 100 000) штанов, про каждый элемент известен его цвет
 * (целое число от 1 до 10 000 000). Помогите Глебу выбрать одну майку и одни штаны так, чтобы разница в их цвете
 * была как можно меньше.
 *
 * Формат ввода:
 * Сначала вводится информация о майках: в первой строке целое число N (1 ≤ N ≤ 100 000) и во второй N целых чисел
 * от 1 до 10 000 000 — цвета имеющихся в наличии маек. Гарантируется, что номера цветов идут в возрастающем порядке
 * (в частности, цвета никаких двух маек не совпадают). Далее в том же формате идёт описание штанов:
 * их количество M (1 ≤ M ≤ 100 000) и в следующей строке M целых чисел от 1 до 10 000 000 в возрастающем
 * порядке — цвета штанов.
 *
 * Формат вывода:
 * Выведите пару неотрицательных чисел — цвет майки и цвет штанов, которые следует выбрать Глебу.
 * Если вариантов выбора несколько, выведите любой из них.
 */

function getStylishClothes(n, colorVest, m, colorPants) {
    let pntVest = 0;
    let pntPants = 0;
    let currDistStylishColor;
    let distStylishColor = Math.abs(colorVest[pntVest] - colorPants[pntPants]);
    let vestStylishColor = pntVest;
    let pantStylishColor = pntPants;

    for (let i = 0; i < n + m - 1; i++) {
        if (pntVest < n && pntPants < m && colorVest[pntVest] < colorPants[pntPants]) {
            pntVest++;
        } else if (pntVest === n - 1) {
            pntPants++;
        } else if (pntPants === m - 1) {
            pntVest++;
        } else {
            pntPants++;
        }
        currDistStylishColor = Math.abs(colorVest[pntVest] - colorPants[pntPants]);
        if (distStylishColor > currDistStylishColor) {
            distStylishColor = currDistStylishColor;
            vestStylishColor = pntVest;
            pantStylishColor = pntPants;
        }
    }
    return [colorVest[vestStylishColor], colorPants[pantStylishColor]];
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
    const colorVest = readArray();
    const m = readInt();
    const colorPants = readArray();

    const result = getStylishClothes(n, colorVest, m, colorPants);

    console.log(result.join(" "));
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

function readEdges(n) {
    let grid = [];
    for (let i = 0; i < n; i++) {
        let vertex = readArray();
        grid.push(vertex);
    }
    return grid;
}

module.exports = getStylishClothes;
