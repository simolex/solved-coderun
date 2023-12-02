/**
 * 75. Метро
 *
 * На некоторых кросс-платформенных станциях метро (как, например, «Третьяковская») на разные стороны платформы
 * приходят поезда разных направлений. Таня договорилась встретиться с подругой на такой станции, но поскольку
 * подруга приехала из другого часового пояса, то из-за джетлага сильно проспала, и Тане пришлось долго её ждать.
 * Поезда всегда ходят точно по расписанию, и Таня знает, что поезд стоит на платформе ровно одну минуту, а интервал
 * между поездами (время, в течение которого поезда у платформы нет) составляет a минут для поездов на первом пути
 * и b минут для поездов на втором пути. То есть на первый путь приезжает поезд и стоит одну минуту, затем
 * в течение a минут поезда у платформы нет, затем в течение одной минуты у платформы стоит следующий поезд и т. д.
 * Пока Таня стояла на платформе, она насчитала n поездов на первом пути и m поездов на втором пути.
 * Определите минимальное и максимальное время, которое Таня могла провести на платформе, или сообщите,
 * что она точно сбилась со счёта.
 * Все поезда, которые видела Таня, она наблюдала в течение всей минуты, то есть Таня не приходит и не уходит
 * с платформы посередине той минуты, когда поезд стоит на платформе.
 *
 * Формат ввода:
 * Первая строка входных данных содержит число a — интервал между поездами на первом пути.
 * Вторая строка содержит число b — интервал между поездами на втором пути.
 * Третья строка содержит число n — количество поездов на первом пути, которые увидела Таня.
 * Четвёртая строка содержит число m — количество поездов на втором пути, которые увидела Таня.
 * Все числа — целые, от 1 до 1000.
 *
 * Формат вывода:
 * Программа должна вывести два числа: минимальное и максимальное время в минутах, которое Таня могла стоять
 * на платформе, или одно число -1, если Таня точно ошиблась.
 */

function getTimeInterval(a, b, n, m) {
    const timeInterval = [];

    timeInterval.push({ length: a * (n - 1) + n, wait: a });
    timeInterval.push({ length: b * (m - 1) + m, wait: b });

    timeInterval.sort((a1, a2) => a1.length - a2.length);

    if (timeInterval[1].length - timeInterval[0].length <= 2 * timeInterval[0].wait) {
        return [
            Math.max(timeInterval[0].length, timeInterval[1].length),
            Math.min(
                timeInterval[0].length + timeInterval[0].wait * 2,
                timeInterval[1].length + timeInterval[1].wait * 2
            )
        ];
    }
    return [];
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
    const a = readInt();
    const b = readInt();
    const n = readInt();
    const m = readInt();

    const result = getTimeInterval(a, b, n, m);

    console.log(result.length === 0 ? "-1" : result.join(" "));
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

module.exports = getTimeInterval;
