/**
 * 113. Реклама
 *
 * Фирма NNN решила транслировать свой рекламный ролик в супермаркете XXX. Однако денег, запланированных на рекламную
 * кампанию, хватило лишь на две трансляции ролика в течение одного рабочего дня. Фирма NNN собрала информацию
 * о времени прихода и времени ухода каждого покупателя в некоторый день. Менеджер по рекламе предположил, что
 * и на следующий день покупатели будут приходить и уходить ровно в те же моменты времени.
 * Помогите ему определить моменты времени, когда нужно включить трансляцию рекламных роликов, чтобы как можно большее
 * количество покупателей прослушало ролик целиком от начала до конца хотя бы один раз. Ролик длится ровно 5 единиц
 * времен. Трансляции роликов не должны пересекаться, то есть начало второй трансляции должно быть хотя бы
 * на 5 единиц времени позже, чем начало первой.
 * Если трансляция ролика включается, например, в момент времени 10, то покупатели, пришедшие в супермаркет в момент
 * времени 10 (или раньше) и уходящие из супермаркета в момент 15 (или позднее) успеют его прослушать
 * целиком, а, например, покупатель, пришедший в момент времени 11, равно как и покупатель, уходящий
 * в момент 14 - не успеют. Если покупатель успевает услышать только конец первой трансляции ролика (не сначала)
 * и начало второй трансляции (не до конца), то считается, что он не услышал объявления. Если покупатель успевает
 * услышать обе трансляции ролика, то при подсчете числа людей, прослушавших ролик, он все равно учитывается всего
 * один раз (фирме важно именно количество различных людей, услышавших ролик).
 *
 * Формат ввода:
 * В первой строке входного файла вводится число N - количество покупателей (1 ≤ N ≤ 2000). В следующих N строках
 * записано по паре натуральных чисел - время прихода и время ухода каждого из них. Все значения времени -
 * натуральные числа, не превышающие 109. Время ухода человека из супермаркета всегда строго больше времени
 * его прихода в супермаркет.
 *
 * Формат вывода:
 * Выведите через пробел три числа: количество покупателей, которые прослушают ролик целиком от начала до конца
 * хотя бы один раз, и моменты времени, когда должна начинаться трансляция ролика. Моменты времени должны быть
 * выведены в возрастающем порядке и должны быть натуральными числами, не превышающими 2·109. Если вариантов
 * ответа несколько, выведите любой из них.
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

function advertiseTime(n, shoppingTime) {
    const result = [];
    // const events = [];
    // const countConnects = new Map();
    // const ticketsHeap = new MinHeap(Array.from({ length: r + 1 }, (_, i) => i + 1));

    // for (let i = 0; i < n; i++) {
    //     events.push([desks[i], EventType.onConnect]);
    //     events.push([desks[i] + r, EventType.offConnect, desks[i]]);
    // }

    // events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    // let ticket;
    // let max = 0;

    // for (let i = 0; i < events.length; i++) {
    //     if (events[i][1] === EventType.onConnect) {
    //         ticket = ticketsHeap.getMin();
    //         max = Math.max(max, ticket);
    //         countConnects.set(JSON.stringify(events[i][0]), ticket);
    //     }

    //     if (events[i][1] === EventType.offConnect) {
    //         ticket = countConnects.get(JSON.stringify(events[i][2]));
    //         ticketsHeap.add(ticket);
    //     }
    // }

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

    const shoppingTime = [];
    for (let i = 0; i < n; i++) {
        shoppingTime.push(readArray());
    }

    const result = advertiseTime(n, shoppingTime);

    console.log(result.join(" "));
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

module.exports = advertiseTime;
