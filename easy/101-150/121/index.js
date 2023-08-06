/**
 *
 * 121. Глубина добавляемых элементов
 *
 * В бинарное дерево поиска добавляются элементы. Выведите глубину для каждого добавленного
 * элемента в том порядке, как они добавлялись. Если элемент уже есть в дереве, то ничего
 * добавлять и выводить не нужно. Глубиной называется расстояние от корня дерева до элемента включительно.
 *
 * Формат ввода:
 * Вводится последовательность целых чисел, оканчивающаяся нулем. Сам ноль в последовательность не входит.
 * По данной последовательности требуется построить дерево.
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
}

function getHeightBST(nums) {
    let heights = [];
    const tree = new BST();
    let result;
    for (let i = 0; i < nums.length && nums[i] !== 0; i++) {
        result = tree.insert(nums[i]);
        if (result) heights.push(result);
    }

    return heights.join(" ");
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
