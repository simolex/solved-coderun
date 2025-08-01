/**
 * 148. Хипуй
 *
 * В этой задаче вам необходимо самостоятельно (не используя соответствующие классы и функции
 * стандартной библиотеки) организовать структуру данных Heap для хранения целых чисел, над которой
 * определены следующие операции:
 * a) Insert(k) – добавить в Heap число k ;
 * b) Extract достать из Heap наибольшее число (удалив его при этом).
 *
 * Формат ввода:
 * В первой строке содержится количество команд N (1 ≤ N ≤ 100000), далее следуют N команд, каждая
 * в своей строке. Команда может иметь формат: “0 << число >>” или “1”, обозначающий, соответственно,
 * операции Insert( << число >> ) и Extract. Гарантируется, что при выполнении команды Extract в структуре
 * находится по крайней мере один элемент.
 *
 * Формат вывода:
 * Для каждой команды извлечения необходимо отдельной строкой вывести число, полученное
 * при выполнении команды Extract.
 *
 */

class Heap {
    constructor({ getKeyFn = (item) => item, type = "min", initValues = [] }) {
        this.getKey = getKeyFn; // Функция для извлечения ключа
        this.type = type; // 'min' или 'max'
        this.values = [...initValues];
        if (this.values.length > 0) {
            for (let i = Math.floor(this.values.length / 2) - 1; i >= 0; i--) {
                this._siftDown(i);
            }
        }
    }

    push(value) {
        this.values.push(value);
        this._siftUp(this.values.length - 1);
    }

    pop() {
        if (this.isEmpty()) return null;
        const top = this.values[0];
        this.values[0] = this.values[this.values.length - 1];
        this._siftDown(0);
        this.values.pop();

        return top;
    }

    peek() {
        return this.isEmpty() ? null : this.values[0];
    }

    size() {
        return this.values.length;
    }

    isEmpty() {
        return this.values.length === 0;
    }

    _swap(i, j) {
        [this.values[i], this.values[j]] = [this.values[j], this.values[i]];
    }

    _compare(a, b) {
        const keyA = this.getKey(a);
        const keyB = this.getKey(b);
        if (this.type === "min") return keyA - keyB; // Минимальная куча
        return keyB - keyA; // Максимальная куча
    }

    _siftUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this._compare(this.values[parentIndex], this.values[index]) > 0) {
                this._swap(index, parentIndex);
                index = parentIndex;
            } else break;
        }
    }

    _siftDown(index) {
        const length = this.values.length;
        while (index * 2 + 1 < length) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let swap = leftChildIndex;

            if (
                rightChildIndex < length &&
                this._compare(this.values[rightChildIndex], this.values[leftChildIndex]) < 0
            ) {
                swap = rightChildIndex;
            }

            if (this._compare(this.values[swap], this.values[index]) < 0) {
                this._swap(index, swap);
                index = swap;
            } else break;
        }
    }
}

function runCLI(n, commands) {
    const result = [];
    const heap = new Heap({
        getKeyFn: (item) => item,
        type: "max"
    });
    for (let i = 0; i < n; i++) {
        if (commands[i][0] === 1) {
            result.push(heap.pop());
        } else {
            heap.push(commands[i][1]);
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

    const commands = [];
    for (let i = 0; i < n; i++) {
        commands.push(readArray());
    }

    const result = runCLI(n, commands);
    console.log(result.join("\n"));
}

function readArray() {
    var arr = _inputLines[_curLine]
        .trim(" ")
        .split(" ")
        .map((num) => Number(num));
    _curLine++;
    return arr;
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readLine() {
    const line = _inputLines[_curLine];
    _curLine++;
    return line.trim();
}

function readNumber() {
    return Number(_inputLines[_curLine++]);
}
module.exports = runCLI;
