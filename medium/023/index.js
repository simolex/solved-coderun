/**
 * 23. Гоблины и шаманы
 *
 * Гоблины Мглистых гор очень любях ходить к своим шаманам. Так как гоблинов много, к шаманам часто образуются
 * очень длинные очереди. А поскольку много гоблинов в одном месте быстро образуют шумную толку, которая мешает
 * шаманам проводить сложные медицинские манипуляции, последние решили установить некоторые правила касательно
 * порядка в очереди.
 * Обычные гоблины при посещении шаманов должны вставать в конец очереди. Привилегированные же гоблины, знающие
 * особый пароль, встают ровно в ее середину, причем при нечетной длине очереди они встают сразу за центром.
 * Так как гоблины также широко известны своим непочтительным отношением ко всяческим правилам и законам,
 * шаманы попросили вас написать программу, которая бы отслеживала порядок гоблинов в очереди.
 *
 * Формат ввода:
 * В первой строке входных данный записано число N (1 ≤ N ≤ 10^5) — количество запросов к программе.
 * Следующие N строк содержат описание запросов в формате:
 * ”+ i” — гоблин с номером i (1 ≤ i ≤ N) встает в конец очереди.
 * ”* i” — привилегированный гоблин с номером i встает в середину очереди.
 * ”-” — первый гоблин из очереди уходит к шаманам.
 * Гарантируется, что на момент такого запроса очередь не пуста.
 *
 * Формат вывода:
 * Для каждого запроса типа ”-” программа должна вывести номер гоблина, который должен зайти к шаманам.
 *
 * Примечания:
 */

class Queue {
    constructor() {
        this.queue = [];
        this.frontPtr = 0;
    }

    push(n) {
        this.queue.push(n);
        return "ok";
    }

    pop() {
        if (this.size() > 0) {
            return this.queue[this.frontPtr++];
        }
        return "error";
    }

    front() {
        if (this.size() > 0) {
            return this.queue[this.frontPtr];
        }
        return "error";
    }

    size() {
        return this.queue.length - this.frontPtr;
    }
}

class Deque {
    deque = [];
    constructor() {
        this.clear();
    }

    _getPtr(ptr) {
        return (this.limit + ((ptr % this.limit) % this.limit)) % this.limit;
    }
    _checkSizeDeque() {
        if (this.size() >= this.limit) {
            let pos = 0;
            const newDeque = this.deque;
            this.deque = [];
            for (let i = this.ptrBack; i < this.ptrFront; i++) {
                this.deque[pos++] = newDeque[this._getPtr(i)];
            }
            this.ptrBack = 0;
            this.ptrFront = pos;
            this.limit *= 2;
        }
    }

    push_front(n) {
        this._checkSizeDeque();
        this.deque[this._getPtr(this.ptrFront++)] = n;
        return "ok";
    }

    push_back(n) {
        this._checkSizeDeque();
        this.deque[this._getPtr(--this.ptrBack)] = n;
        return "ok";
    }

    pop_front() {
        if (this.size() > 0) {
            return this.deque[this._getPtr(--this.ptrFront)];
        }
        return "error";
    }

    pop_back() {
        if (this.size() > 0) {
            return this.deque[this._getPtr(this.ptrBack++)];
        }
        return "error";
    }

    front() {
        if (this.size() > 0) {
            return this.deque[this._getPtr(this.ptrFront - 1)];
        }
        return "error";
    }

    back() {
        if (this.size() > 0) {
            return this.deque[this._getPtr(this.ptrBack)];
        }
        return "error";
    }

    size() {
        return this.ptrFront - this.ptrBack;
    }

    clear() {
        this.deque.length = 0;
        this.ptrBack = 0;
        this.ptrFront = 0;
        this.limit = 2;
        return "ok";
    }

    exit() {
        return "bye";
    }
}

class ChessQueue {
    constructor() {
        this.firstQueue = new Deque();
        this.secondQueue = new Queue();
    }
    _balancing() {
        while (this.firstQueue.size() > this.secondQueue.size()) {
            this.secondQueue.push(this.firstQueue.pop_front());
        }
    }

    push(n) {
        this.firstQueue.push_back(n);
        this._balancing();
        return "ok";
    }

    push_vip(n) {
        this.firstQueue.push_front(n);
        this._balancing();
    }
    pop() {
        const item = this.secondQueue.pop();
        this._balancing();
        return item;
    }
}

function goblinsAndChess(goblins) {
    const queue = new ChessQueue();
    let result = [];

    for (let i = 0; i < goblins.length; i++) {
        const line = goblins[i]
            .trim()
            .split(" ")
            .map((str) => str.trim())
            .filter((str) => str && str.length > 0);

        switch (line[0]) {
            case "+":
                queue.push(Number(line[1]));
                break;

            case "*":
                queue.push_vip(Number(line[1]));
                break;

            case "-":
                result.push(queue.pop());
                break;
        }
    }
    return result;
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

    const goblins = [];
    for (let i = 0; i < n; i++) {
        goblins.push(readString());
    }

    const result = goblinsAndChess(goblins);

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

module.exports = goblinsAndChess;
