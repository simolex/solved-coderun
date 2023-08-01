/**
 *
 * 128. Родословная: число потомков
 *
 * В генеалогическом древе у каждого человека, кроме родоначальника, есть ровно один родитель.
 * Для каждого элемента дерева определите число всех его потомков (не считая его самого).
 *
 * Формат ввода:
 * Программа получает на вход число элементов в генеалогическом древе N. Далее следует N−1 строка,
 * задающие родителя для каждого элемента древа, кроме родоначальника.
 * Каждая строка имеет вид:
 * имяПотомка имяРодителя.
 *
 * Формат вывода:
 * Выведите список всех элементов в лексикографическом порядке, для каждого элемента выводите
 * количество всех его потомков.
 *
 * Примечание:
 * Если вы используете рекурсию, то вам может быть полезно добавление в начало программы следующих строк:
 * import sys
 * sys.setrecursionlimit(100000)
 */

function partition(items, left, right) {
    let temp;
    const pivot = items[Math.floor((right + left) / 2)]; //middle element
    while (left <= right) {
        while (items[left] < pivot) {
            left++;
        }
        while (items[right] > pivot) {
            right--;
        }
        if (left <= right) {
            temp = items[left]; //swap two elements
            items[left] = items[right];
            items[right] = temp;

            left++;
            right--;
        }
    }
    return left;
}

function quickSortRecursive(items, left, right) {
    let index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) {
            //more elements on the left side of the pivot
            quickSortRecursive(items, left, index - 1);
        }
        if (index < right) {
            //more elements on the right side of the pivot
            quickSortRecursive(items, index, right);
        }
    }
    return items;
}

function quickSort(items) {
    return quickSortRecursive(items, 0, items.length - 1);
}

function getPedigreeNumberOfDescendants(names, treePairs) {
    let parent;
    let output = "";
    let currentNames = names;
    let newNames;

    while (currentNames.size > 0) {
        newNames = new Map();
        for (const name of currentNames.keys()) {
            if (treePairs.has(name)) {
                parent = treePairs.get(name);
                if (!newNames.has(parent)) {
                    if (names.has(parent)) {
                        names.set(parent, names.get(parent) + currentNames.get(name) + 1);
                    } else {
                        newNames.set(parent, currentNames.get(name) + 1);
                    }
                } else {
                    newNames.set(parent, newNames.get(parent) + currentNames.get(name) + 1);
                }
            }
        }
        for (const name of newNames.keys()) {
            names.set(name, newNames.get(name));
        }
        currentNames = newNames;
    }

    for (const name of quickSort([...names.keys()])) {
        output += `${name} ${names.get(name)}\n`;
    }
    return output.trim();
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
    const N = readNumber();
    const namesWithoutChild = new Map();
    const namesWithChild = new Set();
    const input = new Map();
    for (let i = 0; i < N - 1; i++) {
        const words = readArray();
        input.set(words[0], words[1]);
        if (!namesWithoutChild.has(words[0])) namesWithoutChild.set(words[0], 0);
        namesWithChild.add(words[1]);
    }
    for (const name of namesWithChild.values()) {
        namesWithoutChild.delete(name);
    }
    namesWithChild.clear();

    const ans = getPedigreeNumberOfDescendants(namesWithoutChild, input);
    console.log(ans);
}

function readArray() {
    var arr = _inputLines[_curLine].trim(" ").split(" ");
    // .map((num) => Number(num));
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

// function readStations() {
//     const M = readNumber();
//     let stations = [];
//     for (let i = 0; i < M; i++) {
//         stations.push(readArray());
//     }
//     return stations;
// }

module.exports = getPedigreeNumberOfDescendants;
