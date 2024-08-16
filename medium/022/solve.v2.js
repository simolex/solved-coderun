class HeapInplace {
    _size;
    constructor(arr, k) {
        this.dictionary = new Int32Array(arr.length).fill(null).map((_, i) => i);
        this._head = 0;
        this._size = Math.min(arr.length, k);
        this._values = arr;
        const lastElementWithChilds = Math.floor(this._size / 2) - 1;
        for (let i = this._head + lastElementWithChilds; i >= this._head; i--) {
            this._siftDown(i);
        }
    }

    replace(oldIndex, newIndex) {
        let i = this.dictionary[oldIndex];

        this.dictionary[newIndex] = i;
        this._values[i] = this._values[newIndex];

        this._siftUp(i);

        i = this.dictionary[newIndex];
        this._siftDown(i);
    }

    peek() {
        return this._getKey(this._values[this._head]);
    }

    _getKey(item) {
        return item;
    }

    _swapItems(index_1, index_2) {
        const currentValue = this._values[index_1];
        this._values[index_1] = this._values[index_2];
        this._values[index_2] = currentValue;

        const currentIndex = this.dictionary[index_1];
        this.dictionary[index_1] = this.dictionary[index_2];
        this.dictionary[index_2] = currentIndex;
    }

    _siftUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);

            if (this._getKey(this._values[parentIndex]) > this._getKey(this._values[index])) {
                this._swapItems(index, parentIndex);
                index = parentIndex;
            } else break;
        }
    }

    _siftDown(index) {
        const length = this._size;
        while (index * 2 + 1 <= length - 1) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;
            leftChild = this._values[leftChildIndex];
            rightChild = this._values[rightChildIndex];

            if (rightChildIndex === length) {
                swap = leftChild;
            }
            swap =
                swap === null && this._getKey(rightChild) < this._getKey(leftChild) ? rightChildIndex : leftChildIndex;
            if (this._getKey(this._values[swap]) < this._getKey(this._values[index])) {
                this._swapItems(index, swap);
                index = swap;
            } else break;
        }
    }
}

function minimumInRange(n, k, nums) {
    const minRange = [];
    const heap = new HeapInplace(nums, k);
    // console.log(heap);

    minRange.push(heap.peek());

    for (let i = k; i < n; i++) {
        heap.replace(i - k, i);
        minRange.push(heap.peek());
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
    const n = params[0];
    const k = params[1];
    const nums = readArray();

    const result = minimumInRange(n, k, nums);
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

module.exports = minimumInRange;
