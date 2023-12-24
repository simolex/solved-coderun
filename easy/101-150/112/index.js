/**
 * 112. Рассадка в аудитории
 *
 * Экзамен по берляндскому языку проходит в узкой и длинной аудитории. На экзамен пришло N студентов. Все они
 * посажены в ряд. Таким образом, позиция каждого человека задается координатой на оси Ox (эта ось ведет вдоль
 * длинной аудитории). Два человека могут разговаривать, если расстояние между ними меньше или равно D. Какое
 * наименьшее количество типов билетов должен подготовить преподаватель, чтобы никакие два студента с одинаковыми
 * билетами не могли разговаривать? Выведите способ раздачи преподавателем билетов.
 *
 * Формат ввода:
 * В первой строке входного файла содержится два целых числа N, D (1 ≤ N ≤ 10000; 0 ≤ D ≤ 10^6). Вторая строка
 * содержит последовательность различных целых чисел X1, X2, ..., XN, где Xi (0 ≤ Xi ≤ 10^6) обозначает координату
 * вдоль оси Ox i-го студента
 *
 * Формат вывода:
 * В первую строчку выходного файла выведите количество вариантов, а во вторую, разделяя пробелами, номера вариантов
 * студентов в том порядке, в каком они перечислены во входном файле.
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

    getSize() {
        return this.values.length;
    }
}

const EventType = {
    onConnect: 1,
    offConnect: 2
};

function countIntersect(n, r, desks) {
    const events = [];
    const countConnects = new Map();
    const ticketsHeap = new MinHeap(Array.from({ length: r + 1 }, (_, i) => i + 1));

    for (let i = 0; i < n; i++) {
        events.push([desks[i], EventType.onConnect]);
        events.push([desks[i] + r, EventType.offConnect, desks[i]]);
    }

    events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    let ticket;
    let max = 0;

    for (let i = 0; i < events.length; i++) {
        if (events[i][1] === EventType.onConnect) {
            ticket = ticketsHeap.getMin();
            max = Math.max(max, ticket);
            countConnects.set(JSON.stringify(events[i][0]), ticket);
        }

        if (events[i][1] === EventType.offConnect) {
            ticket = countConnects.get(JSON.stringify(events[i][2]));
            ticketsHeap.add(ticket);
        }
    }

    return [max, desks.map((p) => countConnects.get(JSON.stringify(p)))];
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
    const params = readArray();
    const n = params[0];
    const r = params[1];

    const desks = readArray();

    const result = countIntersect(n, r, desks);

    console.log(result[0]);
    console.log(result[1].join(" "));
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readArray() {
    let arr = _inputLines[_curLine]
        .trim()
        .split(/\s+/)
        .map((num) => Number(num));
    _curLine++;
    return arr;
}

function readString() {
    const s = _inputLines[_curLine].trim();
    _curLine++;
    return s;
}

module.exports = countIntersect;
