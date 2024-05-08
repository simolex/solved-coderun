/**
 * 24. Тупики
 *
 * На вокзале есть K тупиков, куда прибывают электрички. Этот вокзал является их конечной станцией,
 * поэтому электрички, прибыв, некоторое время стоят на вокзале, а потом отправляются в новый рейс
 * (в ту сторону, откуда прибыли).
 * Дано расписание движения электричек, в котором для каждой электрички указано время ее прибытия,
 * а также время отправления в следующий рейс. Электрички в расписании упорядочены по времени прибытия.
 * Поскольку вокзал — конечная станция, то электричка может стоять на нем довольно долго, в частности,
 * электричка, которая прибывает раньше другой, отправляться обратно может значительно позднее.
 * Тупики пронумерованы числами от 1 до K. Когда электричка прибывает, ее ставят в свободный тупик
 * с минимальным номером. При этом если электричка из какого-то тупика отправилась в момент времени X,
 * то электричку, которая прибывает в момент времени X, в этот тупик ставить нельзя, а электричку, прибывающую
 * в момент X+1 — можно.
 * Напишите программу, которая по данному расписанию для каждой электрички определит номер тупика, куда
 * прибудет эта электричка.
 *
 * Формат ввода:
 * Сначала вводятся число K — количество тупиков и число N — количество электропоездов (1 ≤ K ≤ 100000,
 * 1 ≤ N ≤ 100000). Далее следуют N строк, в каждой из которых записано по 2 числа: время прибытия и время
 * отправления электрички. Время задается натуральным числом, не превышающим 10^9. Никакие две электрички
 * не прибывают в одно и то же время, но при этом несколько электричек могут отправляться в одно и то же время.
 * Также возможно, что какая-нибудь электричка (или даже несколько) отправляются в момент прибытия какой-нибудь
 * другой электрички. Время отправления каждой электрички строго больше времени ее прибытия.
 * Все электрички упорядочены по времени прибытия. Считается, что в нулевой момент времени все тупики
 * на вокзале свободны.
 *
 * Формат вывода:
 * Выведите N чисел — по одному для каждой электрички: номер тупика, куда прибудет соответствующая электричка.
 * Если тупиков не достаточно для того, чтобы организовать движение электричек согласно расписанию, выведите
 * два числа: первое должно равняться 0 (нулю), а второе содержать номер первой из электричек, которая
 * не сможет прибыть на вокзал.
 *
 * Примечания:
 */

class MinHeap {
    constructor(
        initValues,
        getKeyFn = function (item) {
            return item;
        }
    ) {
        this._getKey = getKeyFn;

        if (initValues) {
            this.values = initValues;
            const lastElementWithChilds = Math.floor(initValues.length / 2) - 1;
            for (let i = lastElementWithChilds; i >= 0; i--) {
                this._siftDown(i);
            }
        } else this.values = [];
    }

    add(value) {
        let index = this.values.length;
        this.values.push(value);
        this._siftUp(index);
    }

    getMin() {
        let index = 0;
        const min = this.values[index];
        this.values[index] = this.values[this.values.length - 1];

        this._siftDown(index);
        this.values.pop();
        return min;
    }

    peekMin() {
        if (this.isEmpty()) {
            return false;
        }
        return this.values[0];
    }

    getAllValues() {
        return this.values;
    }

    isEmpty() {
        return this.values.length === 0;
    }

    _swapItems(index_1, index_2) {
        const current = this.values[index_1];
        this.values[index_1] = this.values[index_2];
        this.values[index_2] = current;
    }

    _siftUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);

            if (this._getKey(this.values[parentIndex]) > this._getKey(this.values[index])) {
                this._swapItems(index, parentIndex);
                index = parentIndex;
            } else break;
        }
    }

    _siftDown(index) {
        const length = this.values.length;
        while (index * 2 + 1 < length - 1) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;
            leftChild = this.values[leftChildIndex];
            rightChild = this.values[rightChildIndex];

            if (rightChildIndex === length) {
                swap = leftChild;
            }
            swap =
                this._getKey(rightChild) <= this._getKey(leftChild) && swap === null ? rightChildIndex : leftChildIndex;
            if (this._getKey(this.values[swap]) < this._getKey(this.values[index])) {
                this._swapItems(index, swap);
                index = swap;
            } else break;
        }
    }
}

const initMappedArray = (
    n,
    first = 0,
    step = 1,
    mapFn = step === 1 ? (_, i) => i + first : (_, i) => i * step + first
) => Array(n).fill(null).map(mapFn);

function deadlock(k, timetable) {
    const result = [];
    const deadlockPool = new MinHeap(initMappedArray(k, 1));
    const trainOut = new MinHeap([], function (item) {
        return item.timeOut;
    });

    for (let i = 0; i < timetable.length; i++) {
        const timeIn = timetable[i][0];
        while (!trainOut.isEmpty() && trainOut.peekMin().timeOut < timeIn) {
            deadlockPool.add(trainOut.getMin().deadlock);
        }

        if (deadlockPool.isEmpty()) {
            return [0, i + 1];
        }

        const deadlockNum = deadlockPool.getMin();
        trainOut.add({ timeOut: timetable[i][1], deadlock: deadlockNum });
        result[i] = deadlockNum;
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
    const params = readArray();
    const k = params[0];
    const n = params[1];

    const timetable = [];
    for (let i = 0; i < n; i++) {
        timetable.push(readArray());
    }

    const result = deadlock(k, timetable);

    console.log(result.join(" "));
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

module.exports = deadlock;
