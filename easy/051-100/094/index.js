/**
 * 94. Красота превыше всего
 *
 * В парке города Питсбурга есть чудесная аллея, состоящая из N посаженных в один ряд деревьев, каждое одного
 * из K сортов. В связи с тем, что Питсбург принимает открытый чемпионат Байтландии по программированию, было
 * решено построить огромную арену для проведения соревнований. Так, согласно этому плану вся аллея подлежала
 * вырубке. Однако министерство деревьев и кустов воспротивилось этому решению, и потребовало оставить некоторые
 * из деревьев в покое. Согласно новому плану строительства все деревья, которые не будут вырублены, должны
 * образовывать один непрерывный отрезок, являющийся подотрезком исходного. Каждого из K видов деревьев требуется
 * сохранить хотя бы по одному экземпляру. На вас возложена задача найти отрезок наименьшей длины, удовлетворяющий
 * указанным ограничениям.
 *
 * Формат ввода:
 * В первой строке входного файла находятся два числа N и K (1 ≤ N, K ≤ 250000). Во второй строке входного файла
 * следуют N чисел (разделенных пробелами), i-ое число второй строки задает цвет i-ого слева дерева в аллее.
 * Гарантируется, что присутствует хотя бы одно дерево каждого цвета
 *
 * Формат вывода:
 * В выходной файл выведите два числа, координаты левого и правого концов отрезка минимальной длины,
 * удовлетворяющего условию. Если оптимальных ответов несколько, выведите любой.
 */

function survivorTrees(n, k, avenue) {
    let minLeft = 0;
    let minRight = n;
    const treesColor = new Uint32Array(k + 1);
    treesColor.fill(0);
    let treesColorSize = 0;

    let right = -1;

    const addColor = (color) => {
        if (treesColor[color] > 0) {
            treesColor[color]++;
        } else {
            treesColor[color] = 1;
            treesColorSize++;
        }
    };

    const delColor = (color) => {
        if (treesColor[color] > 0) {
            treesColor[color]--;
            if (treesColor[color] === 0) {
                treesColorSize--;
            }
        }
    };

    for (let left = 0; left < n; left++) {
        while (treesColorSize < k && right < n - 1) {
            right++;
            addColor(avenue[right]);
        }
        if (treesColorSize === k && minRight - minLeft > right - left) {
            minLeft = left;
            minRight = right;
        }
        delColor(avenue[left]);
    }
    return [minLeft + 1, minRight + 1];
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
    const avenue = readArray();

    const result = survivorTrees(n, k, avenue);

    console.log(result.join(" "));
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readArray() {
    var arr = _inputLines[_curLine]
        .trim(" ")
        .split(" ")
        .map((num) => Number(num));
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

module.exports = survivorTrees;
