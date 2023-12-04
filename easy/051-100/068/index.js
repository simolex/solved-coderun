/**
 * 68. Чемпионат по метанию коровьих лепешек
 *
 * Ежегодный турнир «Веселый коровяк» — по метанию коровьих лепешек на дальность — прошёл 8–9 июля в селе Крылово
 * Осинского района Пермского края. Участники соревнований кидают «снаряд» — спрессованный навоз, выбирая его
 * из заранее заготовленной кучи. Желающих поупражняться в силе броска традиционно очень много — как мужчин, так
 * и женщин. Каждую лепешку, которую метнули участники «Веселого коровяка», внимательно осматривали женщины
 * в костюмах коров и тщательно замеряли расстояние.
 * Соревнования по метанию коровьих лепешек проводятся в Пермском крае с 2009 года.
 * К сожалению, после чемпионата потерялись записи с фамилиями участников, остались только записи о длине броска
 * в том порядке, в котором их совершали участники.
 * Тракторист Василий помнит три факта:
 *
 * 1) Число метров, на которое он метнул лепешку, оканчивалось на 5
 * 2) Один из победителей чемпионата метал лепешку до Василия
 * 3) Участник, метавший лепешку сразу после Василия, метнул ее на меньшее количество метров
 *
 * Будем считать, что участник соревнования занял k-е место, если ровно (k − 1) участников чемпионата метнули
 * лепешку строго дальше, чем он.
 * Какое максимально высокое место мог занять Василий?
 *
 * Формат ввода
 * Первая строка входного файла содержит целое число n — количество участников чемпионата
 * по метанию лепешек (3 ≤ n ≤ 10^5 ).
 * Вторая строка входного файла содержит n положительных целых чисел, каждое из которых не превышает 1000,
 * — дальность броска участников чемпионата, приведенные в том порядке, в котором происходило метание.
 *
 * Формат вывода
 * Выведите самое высокое место, которое мог занять тракторист Василий. Если не существует ни одного участника
 * чемпионата, который удовлетворяет, описанным выше условиям, выведите число 0.
 */

function maxCupPlace(n, list) {
    let place = 0;
    let indexWinner = 0;

    for (let i = 1; i < n; i++) {
        if (list[i] > list[indexWinner]) {
            indexWinner = i;
        }
    }

    for (let p = indexWinner + 1; p < n - 1; p++) {
        if (list[p] % 10 === 5 && list[p] > list[p + 1]) {
            if (place === 0) {
                place = p;
            } else {
                place = list[p] > list[place] ? p : place;
            }
        }
    }

    if (place > 0) {
        let fromRight = 0;
        let resultVasily = list[place];

        for (let i = place + 1; i < n; i++) {
            if (list[i] > resultVasily) {
                fromRight++;
            }
        }

        for (let i = 0; i < place; i++) {
            if (list[i] <= resultVasily) {
                fromRight--;
            }
        }
        return place + fromRight + 1;
    }
    return 0;
}

const _readline = require("readline");

const _reader = _readline.createInterface({
    input: process.stdin,
});

const _inputLines = [];
let _curLine = 0;

_reader.on("line", (line) => {
    _inputLines.push(line);
});

process.stdin.on("end", solve);

function solve() {
    const n = readInt();
    const list = readArray();

    const result = maxCupPlace(n, list);

    console.log(result);
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

module.exports = maxCupPlace;
