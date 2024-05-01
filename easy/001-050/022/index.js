/**
 * 22. Минимум на отрезке
 *
 * Рассмотрим последовательность целых чисел длины n. По ней с шагом 1 двигается «окно» длины k, то есть сначала
 * в «окне» видны первые k чисел, на следующем шаге в «окне» уже будут находиться k чисел, начиная со второго,
 * и так далее до конца последовательности. Требуется для каждого положения «окна» определить минимум в нём.
 *
 * Формат ввода:
 * В первой строке входных данных содержатся два натуральных числа n и k (n ≤  150000, k ≤ 10000, k ≤  n) – длины
 * последовательности и «окна», соответственно. На следующей строке находятся n чисел – сама последовательность.
 *
 * Формат вывода:
 * Выходые данные должны содержать n - k + 1 строк – минимумы для каждого положения «окна».
 *
 * Примечания:
 * Обратите внимание, что решение с непосредственным подсчётом минимума для каждого положения окна
 * не пройдёт по времени.
 */

class MinMultiHeap {
    constructor(initValues) {
        this.dictionary = [];

        if (initValues) {
            this.values = initValues;
            this.values.forEach((v, i) => (this.dictionary[v.position] = i));
            const lastElementWithChilds = Math.floor(initValues.length / 2) - 1;
            for (let i = lastElementWithChilds; i >= 0; i--) {
                this._siftDown(i);
            }
        } else this.values = [];
    }

    add(element) {
        this.values.push(element);
        let index = this.values.length - 1;

        this.dictionary[element.position] = index;

        this._siftUp(index);
    }
    replaceItem(positionFrom, positionTo, element) {
        const index = this.dictionary[positionFrom];
        const parentIndex = Math.floor((index - 1) / 2);

        this.values[index] = element;
        this.dictionary[positionTo] = index;

        if (index > 0 && this._getKey(element) < this._getKey(this.values[parentIndex])) {
            this._siftUp(index);
        } else {
            this._siftDown(index);
        }
    }

    getMin() {
        let index = 0;
        const min = this.values[index];
        this.values[index] = this.values[this.values.length - 1];

        this._siftDown(index);
        this.values.pop();
        return min;
    }

    viewMin() {
        return this.values[0];
    }

    getValues() {
        return this.values;
    }

    isEmpty() {
        return this.values.length === 0;
    }

    _getKey(item) {
        return item.value;
    }

    _swapItems(index_1, index_2) {
        const current = this.values[index_1];
        this.values[index_1] = this.values[index_2];
        this.values[index_2] = current;

        this.dictionary[this.values[index_1].position] = index_1;
        this.dictionary[this.values[index_2].position] = index_2;
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

function minimumInRange(k, nums) {
    const minRange = [];
    const heap = new MinMultiHeap();

    for (let i = 0; i < k; i++) {
        heap.add({
            value: nums[i],
            position: i
        });
    }
    minRange.push(heap.viewMin().value);

    for (let i = k; i < nums.length; i++) {
        heap.replaceItem(i - k, i, {
            value: nums[i],
            position: i
        });
        minRange.push(heap.viewMin().value);
    }

    return minRange;
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
    // const n = params[0]
    const k = params[1];
    const nums = readArray();

    const result = minimumInRange(k, nums);
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

module.exports = minimumInRange;
