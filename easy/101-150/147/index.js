/**
 * 147. Дек с защитой от ошибок
 *
 * Научитесь пользоваться стандартной структурой данных deque для целых чисел. Напишите программу, содержащую описание
 * дека и моделирующую работу дека, реализовав все указанные здесь методы. Программа считывает последовательность команд
 * и в зависимости от команды выполняет ту или иную операцию. После выполнения каждой команды программа должна вывести
 * одну строчку.
 * Возможные команды для программы:
 * push_front n - Добавить (положить) в начало дека новый элемент. Программа должна вывести ok.
 * push_back n  - Добавить (положить) в конец дека новый элемент. Программа должна вывести ok.
 * pop_front    - Извлечь из дека первый элемент. Программа должна вывести его значение.
 * pop_back     - Извлечь из дека последний элемент. Программа должна вывести его значение.
 * front        - Узнать значение первого элемента (не удаляя его). Программа должна вывести его значение.
 * back         - Узнать значение последнего элемента (не удаляя его). Программа должна вывести его значение.
 * size         - Вывести количество элементов в деке.
 * clear        - Очистить дек (удалить из него все элементы) и вывести ok.
 * exit         - Программа должна вывести bye и завершить работу.
 *
 * Гарантируется, что количество элементов в деке в любой момент не превосходит 100. Перед исполнением операций
 * pop_front, pop_back, front, back программа должна проверять, содержится ли в деке хотя бы один элемент.
 * Если во входных данных встречается операция pop_front, pop_back, front, back, и при этом дек пуст, то программа
 * должна вместо числового значения вывести строку error.
 *
 * Формат ввода:
 * Вводятся команды управления деком, по одной на строке.
 *
 * Формат вывода:
 * Требуется вывести протокол работы дека, по одному сообщению на строке
 *
 * Примечания:
 */
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

class Parser {
    constructor() {
        this.dequeCLI = new Deque();
    }

    call(text) {
        const line = text
            .trim()
            .split(" ")
            .map((str) => str.trim())
            .filter((str) => str && str.length > 0);
        let result;

        switch (line[0]) {
            case "push_front":
                result = this.dequeCLI.push_front(Number(line[1]));
                break;

            case "push_back":
                result = this.dequeCLI.push_back(Number(line[1]));
                break;

            case "pop_front":
                result = this.dequeCLI.pop_front();
                break;

            case "pop_back":
                result = this.dequeCLI.pop_back();
                break;

            case "front":
                result = this.dequeCLI.front();
                break;

            case "back":
                result = this.dequeCLI.back();
                break;

            case "size":
                result = this.dequeCLI.size();
                break;

            case "clear":
                result = this.dequeCLI.clear();
                break;

            case "exit":
                result = this.dequeCLI.exit();
                break;
        }
        return result;
    }
}

function queueCLI(commands) {
    const cli = new Parser();

    return commands.map((c) => cli.call(c));
}

const _readline = require("readline");

const _reader = _readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const _inputLines = [];
let _curLine = 0;
const cli = new Parser();

_reader.on("line", (line) => {
    const out = cli.call(line);

    console.log(out);
    if (out === "bye") process.exit(0);
});

process.stdin.on("end", solve);

function solve() {
    return;
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

module.exports = queueCLI;
