/**
 *
 * 127. АВЛ-сбалансированность
 *
 * Дерево называется АВЛ-сбалансированным, если для любой его вершины высота левого и правого
 * поддерева для этой вершины различаются не более чем на 1.
 *
 * Формат ввода:
 * Вводится последовательность целых чисел, оканчивающаяся нулем.
 * Сам ноль в последовательность не входит. Постройте по этой последовательности дерево.
 *
 * Формат вывода:
 * Определите, является ли дерево сбалансированным, выведите слово YES или NO.
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

    postorder(handlerFunction) {
        return this._postorderInternal(this.root, handlerFunction);
    }

    _postorderInternal(node, handlerFunction) {
        let leftHeight, rightHeight;
        if (node === null) return 0;

        leftHeight = this._postorderInternal(node.left, handlerFunction);
        rightHeight = this._postorderInternal(node.right, handlerFunction);

        if (Math.abs(leftHeight - rightHeight) > 1) {
            this.balanced = "NO";
        }
        return Math.max(leftHeight, rightHeight) + 1;
    }
}

function getHeightBST(nums) {
    const tree = new BST();
    for (let i = 0; i < nums.length && nums[i] !== 0; i++) {
        tree.insert(nums[i]);
    }
    tree.balanced = "YES";
    tree.postorder();
    return tree.balanced;
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
    console.log(ans);
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
