/**
 * 3. Вывести маршрут максимальной стоимости
 *
 * В левом верхнем углу прямоугольной таблицы размером N×M находится черепашка. В каждой клетке таблицы
 * записано некоторое число. Черепашка может перемещаться вправо или вниз, при этом маршрут черепашки
 * заканчивается в правом нижнем углу таблицы.Подсчитаем сумму чисел, записанных в клетках, через которую
 * проползла черепашка (включая начальную и конечную клетку). Найдите наибольшее возможное значение этой
 * суммы и маршрут, на котором достигается эта сумма.
 *
 * Формат ввода:
 * В первой строке входных данных записаны два натуральных числа N и M, не превосходящих 100 — размеры таблицы.
 * Далее идет N строк, каждая из которых содержит M чисел, разделенных пробелами — описание таблицы. Все числа
 * в клетках таблицы целые и могут принимать значения от 0 до 100.
 *
 * Формат вывода:
 * Первая строка выходных данных содержит максимальную возможную сумму, вторая — маршрут, на котором
 * достигается эта сумма. Маршрут выводится в виде последовательности, которая должна содержать N-1 букву D,
 * означающую передвижение вниз и M-1 букву R, означающую передвижение направо. Если таких последовательностей
 * несколько, необходимо вывести ровно одну (любую) из них.
 *
 * Примечания:
 *
 */

function maximumCost(n, m, weights) {
    const dp = [];
    const route = [];
    const delta = [
        [-1, 0],
        [0, -1]
    ];
    const action = ["D", "R"];

    for (let i = 0; i <= n; i++) {
        dp.push(Array(m + 1).fill(0));
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            dp[i][j] =
                weights[i - 1][j - 1] +
                delta.reduce((max, d) => (max < dp[i + d[0]][j + d[1]] ? dp[i + d[0]][j + d[1]] : max), 0);
        }
    }

    let i = n;
    let j = m;
    let current = dp[n][m];
    while (i > 0 && j > 0) {
        current -= weights[i - 1][j - 1];
        for (let a = 0; a < delta.length; a++) {
            if (current === dp[i + delta[a][0]][j + delta[a][1]]) {
                route.push(action[a]);
                i += delta[a][0];
                j += delta[a][1];
                a = delta.length;
            }
        }
    }
    route.pop();
    route.reverse();

    return [dp[n][m], route];
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
    const params = readArray();
    const n = params[0];
    const m = params[1];
    const weights = [];

    for (let i = 0; i < n; i++) {
        weights.push(readArray());
    }

    const result = maximumCost(n, m, weights);

    console.log(result[0]);
    console.log(result[1].join(" "));
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

module.exports = maximumCost;
