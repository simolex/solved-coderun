/**
 * 145. Очередь с защитой от ошибок
 *
 * Научитесь пользоваться стандартной структурой данных queue для целых чисел. Напишите программу, содержащую описание
 * очереди и моделирующую работу очереди, реализовав все указанные здесь методы.
 * Программа считывает последовательность команд и в зависимости от команды выполняет ту или иную операцию.
 * После выполнения каждой команды программа должна вывести одну строчку.
 * Возможные команды для программы:
 * push n   - Добавить в очередь число n (значение n задается после команды). Программа должна вывести ok.
 * pop      - Удалить из очереди первый элемент. Программа должна вывести его значение.
 * front    - Программа должна вывести значение первого элемента, не удаляя его из очереди.
 * size     - Программа должна вывести количество элементов в очереди.
 * clear    - Программа должна очистить очередь и вывести ok.
 * exit     - Программа должна вывести bye и завершить работу.
 * Перед исполнением операций front и pop программа должна проверять, содержится ли в очереди хотя бы один элемент.
 * Если во входных данных встречается операция front или pop, и при этом очередь пуста, то программа должна вместо
 * числового значения вывести строку error.
 *
 * Формат ввода:
 * Вводятся команды управления очередью, по одной на строке
 *
 * Формат вывода:
 * Требуется вывести протокол работы очереди, по одному сообщению на строке
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

    clear() {
        this.queue.length = 0;
        this.frontPtr = 0;
        return "ok";
    }

    exit() {
        return "bye";
    }
}

class Parser {
    constructor() {
        this.queueCLI = new Queue();
    }

    call(text) {
        const line = text
            .trim()
            .split(" ")
            .map((str) => str.trim())
            .filter((str) => str && str.length > 0);
        let result;

        switch (line[0]) {
            case "push":
                result = this.queueCLI.push(Number(line[1]));
                break;

            case "pop":
                result = this.queueCLI.pop();
                break;

            case "front":
                result = this.queueCLI.front();
                break;

            case "size":
                result = this.queueCLI.size();
                break;

            case "clear":
                result = this.queueCLI.clear();
                break;

            case "exit":
                result = this.queueCLI.exit();
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
