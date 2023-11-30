/**
 * 83. Клавиатура
 *
 * На региональном этапе Всероссийской олимпиады школьников по информатике в 2009 году предлагалась следующая
 * задача. Всем известно, что со временем клавиатура изнашивается,и клавиши на ней начинают залипать. Конечно,
 * некоторое время такую клавиатуру ещё можно использовать, но для нажатий клавиш приходиться использовать
 * большую силу. При изготовлении клавиатуры изначально для каждой клавиши задается количество нажатий,
 * которое она должна выдерживать. Если знать эти величины для используемой клавиатуры,то для определенной
 * последовательности нажатых клавиш можно определить,какие клавиши в процессе их использования сломаются,
 * а какие — нет.
 * Требуется написать программу, определяющую, какие клавиши сломаются в процессе заданного
 * варианта эксплуатации клавиатуры.
 *
 * Формат ввода:
 * Первая строка входных данных содержит целое число n (1 ≤ n ≤ 1000) —количество клавиш на клавиатуре.
 * Вторая строка содержит n целых чисел — с[1], с[2], …, с[n], где c[i]​  (1 ≤ c i​ ≤ 100000) — количество нажатий,
 * выдерживаемых i-ой клавишей.
 * Третья строка содержит целое число k (1 ≤ k ≤ 100000) — общее количество нажатий клавиш, и последняя строка
 * содержит k целых чисел p[j]​  (1 ≤ p[j]​ ≤ n) — последовательность нажатых клавиш.
 *
 * Формат вывода:
 * Программа должна вывести n строк, содержащих информацию об исправности клавиш.
 * Если i-я клавиша сломалась, то i-ая строка должна содержать слово YES,
 * если же клавиша работоспособна — слово NO.
 */

function getKeysState(N, keysResource, K, keysUsage) {
    const countClick = new Array(N);
    countClick.fill(0);

    let key;
    for (let i = 0; i <= K; i++) {
        key = keysUsage[i];
        countClick[key - 1]++;
    }
    return keysResource.map((res, i) => (countClick[i] > res ? "YES" : "NO"));
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
    const N = readNumber();
    const keysResource = readArray();
    const K = readNumber();
    const keysUsage = readArray();

    const ans = getKeysState(N, keysResource, K, keysUsage);
    console.log(ans.join("\n"));
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

module.exports = getKeysState;
