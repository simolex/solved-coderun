/**
 * 140. Стек с защитой от ошибок
 *
 * Научитесь пользоваться стандартной структурой данных stack для целых чисел. Напишите программу, содержащую описание
 * стека и моделирующую работу стека, реализовав все указанные здесь методы. Программа считывает последовательность
 * команд и в зависимости от команды выполняет ту или иную операцию. После выполнения каждой команды программа должна
 * вывести одну строчку. Возможные команды для программы:
 *
 * push n   - Добавить в стек число n (значение n задается после команды). Программа должна вывести ok.
 * pop      - Удалить из стека последний элемент. Программа должна вывести его значение.
 * back     - Программа должна вывести значение последнего элемента, не удаляя его из стека.
 * size     - Программа должна вывести количество элементов в стеке.
 * clear    - Программа должна очистить стек и вывести ok.
 * exit     - Программа должна вывести bye и завершить работу.
 *
 * Перед исполнением операций back и pop программа должна проверять, содержится ли в стеке хотя бы один элемент.
 * Если во входных данных встречается операция back или pop, и при этом стек пуст, то программа должна вместо числового
 * значения вывести строку error.
 *
 * Формат ввода:
 * Вводятся команды управления стеком, по одной на строке
 *
 * Формат вывода:
 * Программа должна вывести протокол работы стека, по одному сообщению на строке
 *
 * Примечания:
 */
class Stack {
    constructor() {
        this.stack = [];
    }

    push(n) {
        this.stack.push(n);
        return "ok";
    }

    pop() {
        if (this.size() > 0) {
            return this.stack.pop();
        }
        return "error";
    }

    back() {
        if (this.size() > 0) {
            return this.stack[this.size() - 1];
        }
        return "error";
    }

    size() {
        return this.stack.length;
    }

    clear() {
        this.stack.length = 0;
        return "ok";
    }

    exit() {
        return "bye";
    }
}

class Parser {
    constructor() {
        this.stackCLI = new Stack();
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
                result = this.stackCLI.push(Number(line[1]));
                break;

            case "pop":
                result = this.stackCLI.pop();
                break;

            case "back":
                result = this.stackCLI.back();
                break;

            case "size":
                result = this.stackCLI.size();
                break;

            case "clear":
                result = this.stackCLI.clear();
                break;

            case "exit":
                result = this.stackCLI.exit();
                break;
        }
        return result;
    }
}

function stackCLI(commands) {
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

module.exports = stackCLI;
