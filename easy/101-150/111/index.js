/**
 * 111. Точки и отрезки
 *
 * Дано n отрезков на числовой прямой и m точек на этой же прямой. Для каждой из данных точек определите, скольким
 * отрезкам они принадлежат. Точка x считается принадлежащей отрезку с концами a и b, если выполняется двойное
 * неравенство min(a, b) ≤ x ≤ max(a, b).
 *
 * Формат ввода:
 * Первая строка содержит два целых числа n (1 ≤ n ≤ 10^5) – число отрезков и m (1 ≤ m ≤ 10^5) – число точек.
 * В следующих n строках по два целых числи ai и bi – координаты концов соответствующего отрезка. В последней
 * строке m целых чисел – координаты точек. Все числа по модулю не превосходят 10^9
 *
 * Формат вывода:
 * В выходной файл выведите m чисел – для каждой точки количество отрезков, в которых она содержится.
 */

const EventType = {
    onObserve: 1,
    onPoint: 2,
    offObserve: 3
};

function countIntersect(n, m, segments, points) {
    const events = [];
    const countSegments = new Map();

    for (let i = 0; i < n; i++) {
        const point = segments[i][0] > segments[i][1] ? [segments[i][1], segments[i][0]] : segments[i];
        events.push([point[0], EventType.onObserve]);
        events.push([point[1], EventType.offObserve]);
    }

    for (let i = 0; i < m; i++) {
        events.push([points[i], EventType.onPoint]);
    }

    events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    let observed = 0;
    for (let i = 0; i < events.length; i++) {
        if (events[i][1] === EventType.onObserve) {
            observed++;
        }
        if (events[i][1] === EventType.onPoint) {
            countSegments.set(JSON.stringify(events[i][0]), observed);
        }

        if (events[i][1] === EventType.offObserve) {
            observed--;
        }
    }

    return points.map((p) => countSegments.get(JSON.stringify(p)));
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
    const m = params[1];

    const segments = [];
    for (let i = 0; i < n; i++) {
        segments.push(readArray());
    }
    const points = readArray();

    const result = countIntersect(n, m, segments, points);

    console.log(result.join(" "));
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readArray() {
    let arr = _inputLines[_curLine]
        .trim()
        .split(/\s+/)
        .map((num) => Number(num));
    _curLine++;
    return arr;
}

function readString() {
    const s = _inputLines[_curLine].trim();
    _curLine++;
    return s;
}

module.exports = countIntersect;
