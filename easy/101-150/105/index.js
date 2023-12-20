/**
 * 105. Площадь
 *
 * Городская площадь имеет размер n× m и покрыта квадратной плиткой размером 1× 1. При плановой замене плитки
 * выяснилось, что новой плитки недостаточно для покрытия всей площади, поэтому было решено покрыть плиткой только
 * дорожку по краю площади, а в центре площади разбить прямоугольную клумбу (см. рисунок к примеру). При этом дорожка
 * должна иметь одинаковую ширину по всем сторонам площади. Определите максимальную ширину дорожки, которую можно
 * выложить из имеющихся плиток.
 *
 * Формат ввода:
 * Первая и вторая строки входных данных содержат по одному числу n и m ( 3 ≤ n ≤ 2*10^9, 3 ≤ m ≤ 2*10^9) — размеры
 * площади. Третья строка содержит количество имеющихся плиток t,  1 ≤ t < nm. Обратите внимание, что значение t
 * может быть больше, чем возможное значение 32-битной целочисленной переменной, поэтому необходимо использовать
 * 64-битные числа (тип int64 в языке Pascal, тип long long в C и C++, тип long в Java и C#).
 *
 * Формат вывода:
 * Программа должна вывести единственное число — максимальную ширину дорожки, которую можно выложить из имеющихся
 * плиток.
 * %{Система оценки}
 * %Решение, правильно работающее только для случаев, когда числа n и m не превосходят 1000, будет оцениваться
 * в 60 баллов.
 *
 * Примечание:
 * Пояснение к примеру. Площадь имеет размеры  6 × 7, из 38 плиток можно выложить дорожку шириной в 2 плитки.
 *
 * <Рисунок demo.105.png>
 *
 */
const leftSearch = (l, r, checkFn, ...checkParams) => {
    let m;
    while (l < r) {
        m = l + (r - l) / 2n;
        if (checkFn(m, ...checkParams)) {
            r = m;
        } else {
            l = m + 1n;
        }
    }
    return l;
};

const rightSearch = (l, r, checkFn, ...checkParams) => {
    let m;
    while (l < r) {
        m = l + (r - l + 1n) / 2n;
        if (checkFn(m, ...checkParams)) {
            l = m;
        } else {
            r = m - 1n;
        }
    }
    return l;
};

function sizeTiledRoad(n, m, t) {
    const sizeSquare = n * m;
    const minSize = n > m ? m : n;

    const isValid = (size) => {
        const flowerBedN = n - 2n * size;
        const flowerBedM = m - 2n * size;
        return sizeSquare - flowerBedN * flowerBedM <= t;
    };

    const sizeRoad = rightSearch(0n, minSize / 2n, isValid);

    return sizeRoad;
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
    const n = readBigInt();
    const m = readBigInt();
    const t = readBigInt();

    const result = sizeTiledRoad(n, m, t);

    console.log(result.toString());
}

function readBigInt() {
    const n = BigInt(_inputLines[_curLine]);
    _curLine++;
    return n;
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
        .map((num) => BigInt(num));
    _curLine++;
    return arr;
}

function readString() {
    const s = _inputLines[_curLine].trim();
    _curLine++;
    return s;
}

module.exports = sizeTiledRoad;
