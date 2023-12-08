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
    // add(element) {
    //     this.values.push(element);
    //     let index = this.values.length - 1;
    //     const current = this.values[index];

    //     while (index > 0) {
    //         let parentIndex = Math.floor((index - 1) / 2);
    //         let parent = this.values[parentIndex];

    //         if (parent <= current) {
    //             this.values[parentIndex] = current;
    //             this.values[index] = parent;
    //             index = parentIndex;
    //         } else break;
    //     }
    // }
    _balancing(index) {
        const length = this.values.length;
        while (index * 2 + 1 < length) {
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
            swap = rightChild >= leftChild && swap === null ? rightChildIndex : leftChildIndex;
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
        this.values[index] = this.values.pop();

        this._balancing(index);

        return max;
    }
    getValues() {
        return this.values;
    }
}

// Для чтения входных данных в Node.js необходимо использовать
// модуль readline, который работает с потоком ввода-вывода
// (stdin/stdout) и позволяет читать строки.
const readline = require("readline");

let k,
    n,
    p,
    pIndex = 0;
let gettedParams = false;

let pBuffer, nBuffer;
let pSequence, nLastPlay;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Данные во входном потоке могут состоять из нескольких строк.
// Чтобы прочитать их, можно использовать метод rl.on(),
// который вызывается каждый раз при появлении новой строки
// в потоке ввода.
// Чтобы вывести результат в поток вывода (stdout),
// можно использовать метод console.log().
// Пример:
// console.log('Результат:', result);

// Пример решения задачи "Вычислите сумму A+B":
rl.on("line", (line) => {
    if (!gettedParams) {
        [n, k, p] = line.split(" ").map(Number);
        pBuffer = new ArrayBuffer(4 * (p + n));
        pSequence = new Uint32Array(pBuffer);
        gettedParams = true;
    } else {
        if (pIndex < p) {
            pSequence[pIndex] = +line;
            pIndex++;
        } else {
            rl.close();
        }
    }
}).on("close", () => {
    let countOperation = 0;

    for (let m = 0; m < n; m++) {
        pSequence[p + m] = m + 1;
    }

    lpBuffer = new ArrayBuffer(4 * p);
    lastPlaySequence = new Uint32Array(lpBuffer);

    const usedCars = new Map();
    for (let i = 1; i <= n; i++) {
        usedCars.set(i, p + i - 1);
    }
    console.log(usedCars.entries());

    for (let i = p - 1; i >= 0; i--) {
        lastPlaySequence[i] = usedCars.get(pSequence[i]);
        usedCars.set(pSequence[i], i);
    }
    console.log(lastPlaySequence);

    // const carInPlay = new Set();
    // const newCars = new Set();
    // const oldCars = new Set();
    // for (let i = 0; i < pSequence.length; i++) {
    //     if (carInPlay.size < k) {
    //         if (!carInPlay.has(pSequence[i])) {
    //             carInPlay.add(pSequence[i]);
    //             countOperation++;
    //         }
    //     } else {
    //         for (let j = i; j < pSequence.length && k - oldCars.size > newCars.size; j++) {
    //             if (carInPlay.has(pSequence[j])) {
    //                 oldCars.add(pSequence[j]);
    //             } else {
    //                 newCars.add(pSequence[j]);
    //             }
    //             i = j;
    //         }
    //         for (let m = i; m < pSequence.length; m++) {
    //             if (!carInPlay.has(pSequence[m])) {
    //                 break;
    //             } else {
    //                 i = m;
    //             }
    //         }
    //         if (oldCars.size > 0) {
    //             for (const car of carInPlay.values()) {
    //                 if (!oldCars.has(car)) {
    //                     carInPlay.delete(car);
    //                 }
    //             }
    //         } else {
    //             carInPlay.clear();
    //         }
    //         for (const car of newCars.values()) {
    //             carInPlay.add(car);
    //             countOperation++;
    //         }
    //         newCars.clear();
    //         oldCars.clear();
    //     }
    // }
    console.log(countOperation);
});
