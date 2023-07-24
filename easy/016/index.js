/**
 * Метрополитен состоит из нескольких линий метро.
 * Все станции метро в городе пронумерованы натуральными числами от 1 до N.
 * На каждой линии расположено несколько станций. Если одна и та же станция расположена
 * сразу на нескольких линиях, то она является станцией пересадки и на этой станции
 * можно пересесть с любой линии, которая через нее проходит, на любую другую (опять же проходящую через нее).
 * Напишите программу, которая по данному вам описанию метрополитена определит,
 * с каким минимальным числом пересадок можно добраться со станции A на станцию B.
 * Если данный метрополитен не соединяет все линии в одну систему, то может так получиться,
 * что со станции A на станцию B добраться невозможно, в этом случае ваша программа должна это определить.
 *
 * Формат ввода:
 * Сначала вводится число N — количество станций метро в городе (2 ≤ N ≤ 100).
 * Далее следует число M — количество линий метро (1 ≤ M ≤ 20). Далее идет описание M линий.
 * Описание каждой линии состоит из числа P[i]​  — количество станций на этой линии (2 ≤ P[i]​ ≤ 50) и P[i]​  чисел,
 * задающих номера станций, через которые проходит линия (ни через какую станцию линия не проходит дважды).
 * Затем вводятся два различных числа: A — номер начальной станции, и B — номер станции,
 * на которую нам нужно попасть. При этом если через станцию A проходит несколько линий,
 * то мы можем спуститься на любую из них. Так же если через станцию B проходит несколько линий,
 * то нам не важно, по какой линии мы приедем.
 *
 * Формат вывода:
 * Выведите минимальное количество пересадок,
 * которое нам понадобится. Если добраться со станции A на станцию B невозможно,
 * программа должна вывести одно число –1 (минус один).
 */

function getTransferCount(countStations, mapStations, fromTo) {
    const vizitedLine = new Set();
    const allStations = new Map();
    const listTranfers = new Map();
    for (let i = 0; i < countStations; i++) {
        allStations.set(i + 1, new Set());
    }

    for (let m = 0; m < mapStations.length; m++) {
        listTranfers.set(m + 1, new Set()); //что не писать в отдельном цикле
        mapStations[m].forEach((sm) => {
            const trasfers = allStations.get(sm);
            trasfers.add(m + 1);
        });
    }

    for (const station of allStations.values()) {
        if (station.size > 1) {
            const availibleStations = [];
            for (const itemStation of station.values()) {
                availibleStations.push(itemStation);
            }
            for (let i = 0; i < availibleStations.length - 1; i++) {
                for (j = i + 1; j < availibleStations.length; j++) {
                    const fromTransfer = availibleStations[i];
                    const toTransfer = availibleStations[j];

                    let station = listTranfers.get(fromTransfer);
                    station.add(toTransfer);

                    station = listTranfers.get(toTransfer);
                    station.add(fromTransfer);
                }
            }
        }
    }
    let countTranfers = -1;
    let frontPoint = 0;
    const startPoint = allStations.get(fromTo[0]);
    const needLine = [];
    const stepTransfers = [];
    let step = 0;
    for (const line of startPoint.values()) {
        needLine.push(line);
        stepTransfers.push(step);
        vizitedLine.add(line);
    }
    const targetLine = allStations.get(fromTo[1]);
    while (frontPoint < needLine.length) {
        const numberLine = needLine[frontPoint];

        let finish = false;
        if (targetLine.has(numberLine)) {
            finish = true;
            countTranfers = stepTransfers[frontPoint];
        }
        if (!finish && listTranfers.has(numberLine)) {
            step = stepTransfers[frontPoint] + 1;
            for (const transfer of listTranfers.get(numberLine).values()) {
                if (!vizitedLine.has(transfer)) {
                    vizitedLine.add(transfer);
                    needLine.push(transfer);
                    stepTransfers.push(step);
                }
            }
        }
        frontPoint++;
    }
    return countTranfers;
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
    const N = readNumber();
    const mapStations = readStations();
    const points = readArray();

    const ans = getTransferCount(N, mapStations, points);
    console.log(ans);
}

function readArray() {
    var arr = _inputLines[_curLine]
        .trim(" ")
        .split(" ")
        .map((num) => Number(num));
    _curLine++;
    return arr;
}

// function readLine() {
//     const line = _inputLines[_curLine];
//     _curLine++;
//     return line;
// }

function readNumber() {
    return Number(_inputLines[_curLine++]);
}

function readStations() {
    const M = readNumber();
    let stations = [];
    for (let i = 0; i < M; i++) {
        stations.push(readArray());
    }
    return stations;
}

module.exports = getTransferCount;
