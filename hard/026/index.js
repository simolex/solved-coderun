/**
 * 26. Машинки
 *
 * Петя, которому три года, очень любит играть с машинками. Всего у Пети N различных машинок, которые хранятся
 * на полке шкафа так высоко, что он сам не может до них дотянуться. Одновременно на полу комнаты может
 * находиться не более K машинок. Петя играет с одной из машинок на полу и если он хочет поиграть с другой
 * машинкой, которая также находится на полу, то дотягивается до нее сам. Если же машинка находится на полке,
 * то он обращается за помощью к маме. Мама может достать для Пети машинку с полки и одновременно с этим
 * поставить на полку любую машинку с пола. Мама очень хорошо знает своего ребенка и может предугадать
 * последовательность, в которой Петя захочет играть с машинками. При этом, чтобы не мешать Петиной игре,
 * она хочет совершить как можно меньше операций по подъему машинки с пола, каждый раз правильно выбирая
 * машинку, которую следует убрать на полку. Ваша задача состоит в том, чтобы определить минимальное количество
 * операций. Перед тем, как Петя начал играть, все машинки стоят на полке.
 *
 * Формат ввода:
 * В первой строке содержаться три числа N, K и P (1 ≤ K ≤ N ≤ 100000, 1≤ P ≤500000). В следующих P строках
 * записаны номера машинок в том порядке, в котором Петя захочет играть с ними.
 *
 * Формат вывода:
 * Выведите единственное число: минимальное количество операций, которое надо совершить Петиной маме.
 *
 * Примечания:
 * Операция 1: снять машинку 1
 * Операция 2: снять машинку 2
 * Операция 3: поднять машинку 2 и снять машинку 3
 * Операция 4: поднять машинку 3 или 1 и снять машинку 2
 */

class MRU {
    constructor(limit = 0) {
        this.dictionary = new Map();
        this.limit = limit;
        this.values = [];
    }

    _getKey(item) {
        return item.times;
    }

    _getValue(item) {
        return item.carNumber;
    }

    _update(value) {
        let oldIndex;

        oldIndex = this.dictionary.get(this._getValue(value));
        this.values[oldIndex] = value;
        this._siftUp(oldIndex);

        oldIndex = this.dictionary.get(this._getValue(value));
        this._siftDown(oldIndex);
        return;
    }

    _add(value) {
        let index;
        index = this.values.length;

        this.dictionary.set(this._getValue(value), index);
        this.values.push(value);
        this._siftUp(index);
    }

    _pop() {
        let index = 0;
        const min = this.values[index];
        this.values[index] = this.values[this.values.length - 1];

        this._siftDown(index);
        this.values.pop();
        this.dictionary.delete(this._getValue(min));
        return min;
    }

    _length() {
        return this.values.length;
    }

    push(value) {
        if (this._length() < this.limit && !this.dictionary.has(this._getValue(value))) {
            this._add(value);
            return { result: "added", new: this._getValue(value) };
        } else {
            if (this.dictionary.has(this._getValue(value))) {
                this._update(value);
                return { result: "updated", new: this._getValue(value) };
            } else {
                const missed = this._pop();
                this._add(value);
                return { result: "changed", old: this._getValue(missed), new: this._getValue(value) };
            }
        }
        return {};
    }

    peek() {
        return this._getValue(this.values[0]);
    }

    getValues() {
        return this.values;
    }

    isEmpty() {
        return this.values.length === 0;
    }

    _swapItems(index_1, index_2) {
        const current = this.values[index_1];
        this.values[index_1] = this.values[index_2];
        this.values[index_2] = current;

        this.dictionary.set(this._getValue(this.values[index_1]), index_1);
        this.dictionary.set(this._getValue(this.values[index_2]), index_2);
    }

    _siftUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);

            if (this._getKey(this.values[parentIndex]) < this._getKey(this.values[index])) {
                this._swapItems(index, parentIndex);
                index = parentIndex;
            } else break;
        }
    }

    _siftDown(index) {
        const length = this.values.length;
        while (index * 2 + 1 <= length - 1) {
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
                swap === null && this._getKey(rightChild) >= this._getKey(leftChild) ? rightChildIndex : leftChildIndex;
            if (this._getKey(this.values[swap]) > this._getKey(this.values[index])) {
                this._swapItems(index, swap);
                index = swap;
            } else break;
        }
    }
}

function cars(n, k, sequence) {
    const p = sequence.length;
    const using = [];
    const lastUsed = new Map();
    const heap = new MRU(k);

    for (let i = p - 1; i >= 0; i--) {
        const curCar = sequence[i];
        if (!lastUsed.has(curCar)) {
            lastUsed.set(curCar, p);
        }
        using[i] = lastUsed.get(curCar);
        lastUsed.set(curCar, i);
    }
    // console.dir(using, { maxArrayLength: null });

    return sequence.reduce((count, c, i) => {
        const r = heap.push({ carNumber: c, times: using[i] });

        return ["added", "changed"].includes(r.result) ? count + 1 : count;
    }, 0);
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
    const p = params[2];

    const sequence = [];
    for (let i = 0; i < p; i++) {
        sequence.push(readInt());
    }

    const result = cars(n, k, sequence);

    console.log(result);
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

module.exports = cars;
