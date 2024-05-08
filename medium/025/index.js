/**
 * 25. Коммерческий калькулятор
 *
 * Фирма OISAC выпустила новую версию калькулятора. Этот калькулятор берет с пользователя деньги за совершаемые
 * арифметические операции. Стоимость каждой операции в долларах равна 5% от числа, которое является результатом
 * операции. На этом калькуляторе требуется вычислить сумму N натуральных чисел (числа известны). Нетрудно
 * заметить, что от того, в каком порядке мы будем складывать эти числа, иногда зависит, в какую сумму денег
 * нам обойдется вычисление суммы чисел (тем самым оказывается нарушен классический принцип “от перестановки
 * мест слагаемых сумма не меняется”).
 * Например, пусть нам нужно сложить числа 10, 11, 12 и 13. Тогда если мы сначала сложим 10 и 11 (это обойдется
 * нам в 1.05 €), потом результат с 12 (1.65 €), и затем с 13 (2.3 €), то всего мы заплатим 5 €, если же
 * сначала отдельно сложить 10 и 11 (1.05 €), потом 12 и 13 (1.25 €) и, наконец, сложить между собой два
 * полученных числа (2.3 €), то в итоге мы заплатим лишь 4.6 €. Напишите программу, которая будет определять,
 * за какую минимальную сумму денег можно найти сумму данных N чисел.
 *
 * Формат ввода:
 * Первая строка входных данных содержит число N (2 ≤ N ≤ 105). Во второй строке заданы N натуральных чисел,
 * каждое из которых не превосходит 10000.
 *
 * Формат вывода:
 * Определите, сколько денег нам потребуется на нахождения суммы этих N чисел. Результат должен быть выведен
 * с двумя знаками после десятичной точки.
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

function commercialСalculator(nums) {
    let result = 0;
    const heap = new MinHeap(nums);
    while (heap.getAllValues().length > 1) {
        const sum = heap.getMin() + heap.getMin();
        result += sum * 0.05;
        heap.add(sum);
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
    const nums = readArray();

    const result = commercialСalculator(nums);

    console.log(result.toFixed(2));
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

module.exports = commercialСalculator;
