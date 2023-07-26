/**
 *
 * 60. Кубики
 *
 * Аня и Боря любят играть в разноцветные кубики, причём у каждого из них свой набор
 * и в каждом наборе все кубики различны по цвету. Однажды дети заинтересовались,
 * сколько существуют таких цветов, что кубики каждого цвета присутствуют в обоих наборах.
 * Для этого они занумеровали все цвета случайными числами. На этом их энтузиазм иссяк,
 * поэтому вам предлагается помочь им в оставшейся части. Номер любого цвета — это целое число
 * в пределах от 0 до 10^9.
 *
 * Формат ввода:
 * В первой строке входного файла записаны числа N и M — количество кубиков у Ани и Бори соответственно.
 * В следующих N строках заданы номера цветов кубиков Ани. В последних M строках номера цветов кубиков Бори.
 *
 * Формат вывода:
 * Выведите сначала количество, а затем отсортированные по возрастанию номера цветов таких,
 * что кубики каждого цвета есть в обоих наборах, затем количество и отсортированные по возрастанию
 * номера остальных цветов у Ани, потом количество и отсортированные по возрастанию номера остальных цветов у Бори.
 *
 */

function sortOfSet(data) {
    const arr = Array.from(data);
    arr.sort((a, b) => a - b);
    return arr.join(" ");
}

function getCubes(colors) {
    const commonColors = new Set();
    for (const color of colors[0]) {
        if (colors[1].has(color)) {
            commonColors.add(color);
        }
    }
    for (const color of commonColors) {
        colors.forEach((child) => child.delete(color));
    }

    let output = commonColors.size + "\n";
    if (commonColors.size > 0) {
        output += sortOfSet(commonColors) + "\n";
    } else output += "\n";

    colors.forEach((child) => {
        output += child.size + "\n";
        if (child.size > 0) {
            output += sortOfSet(child) + "\n";
        } else output += "\n";
    });

    return output;
}

const _readline = require("readline");

const _reader = _readline.createInterface({
    input: process.stdin,
});

const _inputLines = [];
let _curLine = 0;

_reader.on("line", (line) => {
    _inputLines.push(line);
});

process.stdin.on("end", solve);

function solve() {
    const cubes = readArray();
    const colors = [];
    for (let i = 0; i < 2; i++) {
        const child = new Set();
        const M = cubes[i];
        for (let j = 0; j < M; j++) {
            child.add(readNumber());
        }
        colors.push(child);
    }

    const ans = getCubes(colors);
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

// function readStations() {
//     const M = readNumber();
//     let stations = [];
//     for (let i = 0; i < M; i++) {
//         stations.push(readArray());
//     }
//     return stations;
// }

module.exports = getCubes;
