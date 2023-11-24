/**
 * 148. Хипуй (модификация н минимум)
 *
 * В этой задаче вам необходимо самостоятельно (не используя соответствующие классы и функции
 * стандартной библиотеки) организовать структуру данных Heap для хранения целых чисел, над которой
 * определены следующие операции:
 * a) Insert(k) – добавить в Heap число k ;
 * b) Extract достать из Heap наименьшее число (удалив его при этом).
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

class MinHeap {
    constructor(initValues) {
        if (initValues) {
            this.values = initValues;
            const lastElementWithChilds = Math.floor(initValues.length / 2) - 1;
            for (let i = lastElementWithChilds; i >= 0; i--) {
                this._balancing(i);
            }
        } else this.values = [];
    }
    add(element) {
        this.values.push(element);
        let index = this.values.length - 1;

        while (index > 0) {
            const current = this.values[index];
            let parentIndex = Math.floor((index - 1) / 2);

            if (this.values[parentIndex] > current) {
                this.values[index] = this.values[parentIndex];
                this.values[parentIndex] = current;
                index = parentIndex;
            } else break;
        }
    }
    _balancing(index) {
        const length = this.values.length;
        while (index * 2 + 1 < length - 1) {
            const current = this.values[index];
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;
            leftChild = this.values[leftChildIndex];
            rightChild = this.values[rightChildIndex];

            if (rightChildIndex === length) {
                swap = leftChild;
            }
            swap = rightChild <= leftChild && swap === null ? rightChildIndex : leftChildIndex;
            if (this.values[swap] < current) {
                this.values[index] = this.values[swap];
                this.values[swap] = current;
                index = swap;
            } else break;
        }
    }
    getMin() {
        let index = 0;
        const min = this.values[index];
        this.values[index] = this.values[this.values.length - 1];

        this._balancing(index);
        this.values.pop();
        return min;
    }

    getValues() {
        return this.values;
    }
}

function runCLI(n, commands) {
    const result = [];
    const heap = new MinHeap();
    for (let i = 0; i < n; i++) {
        if (commands[i][0] === 1) {
            result.push(heap.getMin());
        } else {
            heap.add(commands[i][1]);
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

function readLine() {
    const line = _inputLines[_curLine];
    _curLine++;
    return line.trim();
}

function readNumber() {
    return Number(_inputLines[_curLine++]);
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

module.exports = runCLI;
