/**
 * 92. Туризм
 *
 * Александр недавно увлекся горным туризмом. Ему уже надоело покорять отдельные горные пики, и он собирается
 * покорить самую настоящую горную цепь! Напомним, что Александр живет в плоском мире. Горная цепь состоит
 * из отрезков, соединяющих точки на плоскости, каждая из которых находится строго правее предыдущей (x-координата
 * следующей точки больше, чем у предыдущей). Трассой на горной цепи называется её часть между двумя фиксированными
 * концами отрезков.Участок, на котором при движении по трассе координата y (высота) всегда возрастает, называется
 * подъемом, величиной подъема называется разность высот между начальной и конечной точками участка. Туристическая
 * компания предлагает на выбор несколько трасс на одной горной цепи. Александр из-за финансовых трудностей может
 * выбрать для поездки только одну из этих трасс. Вы решили помочь ему с выбором. Александру важно для каждой трассы
 * определить суммарную высоту подъемов на ней. Обратите внимание, что трасса может идти как слева-направо, так
 * и справа-налево.
 *
 * Формат ввода:
 * В первой строке входного файла содержится единственное число N — количество точек ломаной, задающей горную цепь
 * (1 ≤ N ≤ 30 000). Далее в N строках содержатся описания точек, каждое из которых состоит из двух целых чисел,
 * x[i] и y[i] (1 ≤ x[i], y[i] ≤ 30 000). В следующей строке находится число M — количество трасс (1 ≤ M ≤ 30 000).
 * Далее в M строках содержатся описания трасс. Каждое описание представляет собой два целых числа, s[i] и f[i],
 * они обозначают номера вершин начала и конца трассы, соответственно (1 ≤ s[i] ≤ N, 1 ≤ f[i] ≤ N). Начало
 * и конец трассы могут совпадать.
 * Гарантируется, что во входном файле задана именно горная цепь.
 *
 * Формат вывода:
 * Для каждой трассы выведите одно число — суммарную высоту подъемов на данной трассе.
 */

function heightTrack(n, pointTrack, m, queries) {
    const x_axis = [0, 0];

    let lastY = pointTrack[0][1];

    for (let i = 1; i < n; i++) {
        const height = pointTrack[i][1] - lastY;
        if (height > 0) {
            x_axis[i + 1] = x_axis[i] + height;
        } else {
            x_axis[i + 1] = x_axis[i];
        }
        lastY = pointTrack[i][1];
    }

    const x_axis_reverse = [];

    lastY = pointTrack[n - 1][1];
    x_axis_reverse[n] = 0;

    for (let i = n - 2; i >= 0; i--) {
        const height = pointTrack[i][1] - lastY;
        if (height > 0) {
            x_axis_reverse[i + 1] = x_axis_reverse[i + 2] + height;
        } else {
            x_axis_reverse[i + 1] = x_axis_reverse[i + 2];
        }
        lastY = pointTrack[i][1];
    }
    const result = [];
    for (let i = 0; i < m; i++) {
        const q = queries[i];
        if (q[0] <= q[1]) {
            result.push(x_axis[q[1]] - x_axis[q[0]]);
        } else {
            result.push(x_axis_reverse[q[1]] - x_axis_reverse[q[0]]);
        }
    }
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
    const pointTrack = [];
    for (let i = 0; i < n; i++) {
        pointTrack.push(readArray());
    }
    const m = readInt();
    const queries = [];
    for (let i = 0; i < m; i++) {
        queries.push(readArray());
    }

    const result = heightTrack(n, pointTrack, m, queries);

    console.log(result.join("\n"));
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

module.exports = heightTrack;
