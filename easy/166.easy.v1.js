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
        const max = this.values[index];
        this.values[index] = this.values.pop();

        this._balancing(index);

        return max;
    }
}
const YF = (N, staff, K) => {
    let x = 0;
    if (N === K) {
        for (let i = 0; i < K; i += 1) {
            x = x + staff[i];
        }
    } else if (K > N / 2) {
        const heap = new MaxHeap(staff);
        for (let i = 0; i < K; i += 1) {
            x = x + heap.getMax();
        }
    } else {
        const heap = new MinHeap(staff);
        for (let i = 0; i < N - K; i += 1) {
            heap.getMin();
        }
        for (let i = 0; i < K; i += 1) {
            x = x + heap.values[i];
        }
    }

    return x; // x - максимальный уровень Яндексформера
};

console.log(YF(15, [19, 20, 5, 10, 2, 20, 7, 9, 1, 3, 13, 14, 3, 3, 4], 7));
