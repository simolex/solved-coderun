/**
 * 135. Операционные системы lite
 *
 * Васин жесткий диск состоит из M секторов. Вася последовательно устанавливал на него различные операционные
 * системы следующим методом: он создавал новый раздел диска из последовательных секторов, начиная с сектора номер
 * ai и до сектора bi включительно, и устанавливал на него очередную систему. При этом, если очередной раздел хотя
 * бы по одному сектору пересекается с каким-то ранее созданным разделом, то ранее созданный раздел «затирается»,
 * и операционная система, которая на него была установлена, больше не может быть загружена.
 * Напишите программу, которая по информации о том, какие разделы на диске создавал Вася, определит, сколько
 * в итоге работоспособных операционных систем установлено и работает в настоящий момент на Васином компьютере.
 *
 * Формат ввода:
 * Сначала вводятся натуральное число M — количество секторов на жестком диске (1 ≤ M ≤ 10^9) и целое
 * число N — количество разделов, которое последовательно создавал Вася (0 ≤ N ≤ 1000).
 * Далее идут N пар чисел a[i] и b[i], задающих номера начального
 * и конечного секторов раздела (1 ≤ a[i] ≤ b[i] ≤ M).
 *
 * Формат вывода:
 * Выведите одно число — количество работающих операционных систем на Васином компьютере.
 *
 * Примечания:
 */

function countValidVolume(n, volumes) {
    const validMarker = [];
    const lengthVolumes = volumes.map((v) => v[1] - v[0] + 1);

    for (let i = 0; i < volumes.length; i++) {
        validMarker[i] = true;
        for (let j = 0; j < validMarker.length - 1; j++) {
            if (
                validMarker[j] &&
                Math.max(volumes[i][1], volumes[j][1]) - Math.min(volumes[i][0], volumes[j][0]) + 1 <
                    lengthVolumes[i] + lengthVolumes[j]
            ) {
                validMarker[j] = false;
            }
        }
    }
    return validMarker.reduce((sum, m) => sum + (m ? 1 : 0), 0);
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
    const m = readInt();

    const volumes = [];
    for (let i = 0; i < m; i++) {
        volumes.push(readArray());
    }

    const result = countValidVolume(n, volumes);

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

module.exports = countValidVolume;
