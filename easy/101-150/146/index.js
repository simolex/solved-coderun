/**
 * 146. Игра в пьяницу
 *
 * В игре в пьяницу карточная колода раздается поровну двум игрокам. Далее они вскрывают по одной верхней карте, и тот,
 * чья карта старше, забирает себе обе вскрытые карты, которые кладутся под низ его колоды. Тот, кто остается без карт
 * – проигрывает. Для простоты будем считать, что все карты различны по номиналу, а также, что самая младшая карта
 * побеждает самую старшую карту («шестерка берет туза»). Игрок, который забирает себе карты, сначала кладет под низ
 * своей колоды карту первого игрока, затем карту второго игрока (то есть карта второго игрока оказывается внизу колоды).
 * Напишите программу, которая моделирует игру в пьяницу и определяет, кто выигрывает. В игре участвует 10 карт, имеющих
 * значения от 0 до 9, большая карта побеждает меньшую, карта со значением 0 побеждает карту 9.
 *
 * Формат ввода:
 * Программа получает на вход две строки: первая строка содержит 5 чисел, разделенных пробелами — номера карт первого
 * игрока, вторая – аналогично 5 карт второго игрока. Карты перечислены сверху вниз, то есть каждая строка начинается
 * с той карты, которая будет открыта первой.
 *
 * Формат вывода:
 * Программа должна определить, кто выигрывает при данной раздаче, и вывести слово first или second, после чего вывести
 * количество ходов, сделанных до выигрыша. Если на протяжении 10^6 ходов игра не заканчивается, программа должна
 * вывести слово botva.
 *
 * Примечания:
 */

class QueueRing {
    constructor(init) {
        if (Array.isArray(init) && init.length > 0) {
            this.queue = init;
            this.ptrTail = init.length;
        } else {
            this.queue = [];
            this.ptrTail = 0;
        }
        this.ptrHead = 0;
        this.limit = 10;
    }

    _getPtr(ptr) {
        return (this.limit + ((ptr % this.limit) % this.limit)) % this.limit;
    }

    push(n) {
        this.queue[this._getPtr(this.ptrTail++)] = n;
    }

    pop() {
        if (this.size() > 0) {
            return this.queue[this._getPtr(this.ptrHead++)];
        }
        return "empty";
    }

    size() {
        return this.ptrTail - this.ptrHead;
    }
}

function playDrunkard(firstCards, secondCards) {
    const first = new QueueRing(firstCards);
    const second = new QueueRing(secondCards);

    let stage = 0;

    while (first.size() > 0 && second.size() > 0 && stage < 10 ** 6) {
        const card_1 = first.pop();
        const card_2 = second.pop();

        if (
            (card_1 > card_2 && card_2 > 0 && card_1 <= 9) ||
            (card_1 > card_2 && card_2 === 0 && card_1 < 9) ||
            (card_1 === 0 && card_2 === 9)
        ) {
            first.push(card_1);
            first.push(card_2);
        } else {
            second.push(card_1);
            second.push(card_2);
        }
        stage++;
    }

    return [stage >= 10 ** 6 ? 0 : first.size() > 0 ? 1 : 2, stage];
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
    const firstCards = readArray();
    const secondCards = readArray();

    const result = playDrunkard(firstCards, secondCards);
    switch (result[0]) {
        case 0:
            console.log(`botva`);
            break;
        case 1:
            console.log(`first ${result[1]}`);
            break;
        case 2:
            console.log(`second ${result[1]}`);
            break;
    }
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

module.exports = playDrunkard;
