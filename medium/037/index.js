/**
 * 37. Покупка билетов
 *
 * За билетами на премьеру нового мюзикла выстроилась очередь из N человек, каждый из которых хочет
 * купить 1 билет. На всю очередь работала только одна касса, поэтому продажа билетов шла очень медленно,
 * приводя «постояльцев» очереди в отчаяние. Самые сообразительные быстро заметили, что, как правило, несколько
 * билетов в одни руки кассир продаёт быстрее, чем когда эти же билеты продаются по одному. Поэтому они
 * предложили нескольким подряд стоящим людям отдавать деньги первому из них, чтобы он купил билеты на всех.
 * Однако для борьбы со спекулянтами кассир продавала не более 3-х билетов в одни руки, поэтому договориться
 * таким образом между собой могли лишь 2 или 3 подряд стоящих человека.
 * Известно, что на продажу i-му человеку из очереди одного билета кассир тратит Ai секунд, на продажу двух
 * билетов — Bi секунд, трех билетов — Ci секунд. Напишите программу, которая подсчитает минимальное время,
 * за которое могли быть обслужены все покупатели.
 * Обратите внимание, что билеты на группу объединившихся людей всегда покупает первый из них. Также никто
 * в целях ускорения не покупает лишних билетов (то есть билетов, которые никому не нужны).
 *
 * Формат ввода:
 * На вход программы поступает сначала число N — количество покупателей в очереди (1 ≤ N ≤ 5000).
 * Далее идет N троек натуральных чисел Ai, Bi, Ci. Каждое из этих чисел не превышает 3600. Люди в очереди
 * нумеруются, начиная от кассы.
 *
 * Формат вывода:
 * Требуется вывести одно число — минимальное время в секундах, за которое могли быть обслужены все покупатели.
 *
 * Примечания:
 *
 */

function buyTickets(n, checkoutSpeed) {
    const dp = [];
    const buyed = [];

    dp[0] = 0;

    for (let i = 1; i <= n; i++) {
        const steps = i < 3 ? i : 3;
        dp[i] = Number.POSITIVE_INFINITY;
        for (let j = 1; j <= steps; j++) {
            console.log(i, j, dp[i - j] + checkoutSpeed[i - 1][j - 1]);
            if (dp[i] > dp[i - j] + checkoutSpeed[i - 1][j - 1]) {
                dp[i] = dp[i - j] + checkoutSpeed[i - 1][j - 1];
            }
        }
    }

    console.log(dp);

    return n === 1 ? 1 : dp[n];
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
    const checkoutSpeed = [];

    for (let i = 0; i < n; i++) {
        checkoutSpeed.push(readArray());
    }
    console.log(checkoutSpeed);

    const result = buyTickets(n, checkoutSpeed);

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

module.exports = buyTickets;
