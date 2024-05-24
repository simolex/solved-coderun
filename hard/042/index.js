/**
 * 42. Кружки в Маховниках
 */

class MaxHeap {
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

            if (this.values[parentIndex] < current) {
                this.values[index] = this.values[parentIndex];
                this.values[parentIndex] = current;
                index = parentIndex;
            } else break;
        }
    }
    _balancing(index) {
        const length = this.values.length;
        while (index * 2 + 1 <= length - 1) {
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
            swap = swap === null && rightChild >= leftChild ? rightChildIndex : leftChildIndex;
            if (this.values[swap] > current) {
                this.values[index] = this.values[swap];
                this.values[swap] = current;
                index = swap;
            } else break;
        }
    }
    getMax() {
        let index = 0;
        const max = this.values[index];
        this.values[index] = this.values[this.values.length - 1];

        this._balancing(index);
        this.values.pop();
        return max;
    }
    getValues() {
        return this.values;
    }
    getSize() {
        return this.values.length;
    }
}

function topSorting(n, needClubs) {
    const listEdges = Array(n + 1)
        .fill(null)
        .map((v) => new Set());
    const visited = Array(n + 1).fill(-1);

    let k;
    for (let i = 0; i < n; i++) {
        k = needClubs[i][0];
        for (let j = 1; j <= k; j++) {
            listEdges[i + 1].add(needClubs[i][j]);
        }
    }

    for (let i = 1; i <= n; i++) {
        const heap = new MaxHeap([...listEdges[i].values()]);
        listEdges[i] = heap;
    }

    const result = [];
    for (let i = 1; i <= n; i++) {
        if (visited[i] < 0) {
            const stack = [i];
            while (stack.length > 0) {
                const v = stack.pop();

                if (visited[v] > 0) {
                    if (visited[v] === 1) {
                        result.push(v);
                    }
                    visited[v] = 2;
                    continue;
                }

                stack.push(v);
                visited[v] = 1;

                while (listEdges[v].getSize() > 0) {
                    const vertex = listEdges[v].getMax();
                    if (v !== vertex && visited[vertex] === 1) {
                        return [];
                    }
                    if (visited[vertex] < 0) {
                        stack.push(vertex);
                    }
                }
            }
        }
    }

    // result.reverse();
    return result;
}

const _readline = require("readline");

const _reader = _readline.createInterface({
    input: process.stdin,
});

const _inputLines = [];
let _curLine = 0;

_reader.on("line", (line) => {
    _inputLines.push(line);
});

process.stdin.on("end", solve);

function solve() {
    const n = readInt();

    const needClubs = [];

    for (let i = 0; i < n; i++) {
        needClubs.push(readArray());
    }

    const result = topSorting(n, needClubs);

    console.log(result.length > 0 ? result.join(" ") : "-1");
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

module.exports = topSorting;
