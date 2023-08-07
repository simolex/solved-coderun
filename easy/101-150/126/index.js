/**
 *
 * 126. Вывод веток
 *
 * Для полученного дерева выведите список всех вершин, имеющих только одного ребёнка, в порядке возрастания.
 *
 * Формат ввода:
 * Вводится последовательность целых чисел, оканчивающаяся нулем.
 * Сам ноль в последовательность не входит. Постройте по этой последовательности дерево.
 *
 * Формат вывода:
 * Выведите ответ на задачу.
 *
 */
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let level = 0;
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return level + 1;
        }
        let node = this.root;
        while (node) {
            level++;
            if (node.value === value) {
                return undefined;
            }
            if (value < node.value) {
                if (node.left === null) {
                    node.left = newNode;
                    return level + 1;
                }
                node = node.left;
            } else {
                if (node.right === null) {
                    node.right = newNode;
                    return level + 1;
                }
                node = node.right;
            }
        }
    }

    inorder(handlerFunction) {
        this._inorderInternal(this.root, handlerFunction);
    }

    _inorderInternal(node, handlerFunction) {
        if (node === null) return;

        this._inorderInternal(node.left, handlerFunction);
        handlerFunction(node);
        this._inorderInternal(node.right, handlerFunction);
    }
}

function getHeightBST(nums) {
    const tree = new BST();
    for (let i = 0; i < nums.length && nums[i] !== 0; i++) {
        tree.insert(nums[i]);
    }

    tree.inorder((node) => {
        if ((node.left === null && node.right !== null) || (node.left !== null && node.right === null)) {
            console.log(node.value);
        }
    });
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
    const nums = readArray();

    const ans = getHeightBST(nums);
    // console.log(ans);
}

function readArray() {
    var arr = _inputLines[_curLine]
        .trim(" ")
        .split(" ")
        .map((num) => Number(num));
    _curLine++;
    return arr;
}

function readLine() {
    const line = _inputLines[_curLine];
    _curLine++;
    return line.trim();
}

function readNumber() {
    return Number(_inputLines[_curLine++]);
}

module.exports = getHeightBST;
