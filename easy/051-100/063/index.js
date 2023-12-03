/**
 * 63. Треугольник Максима
 *
 * С детства Максим был неплохим музыкантом и мастером на все руки. Недавно он самостоятельно сделал несложный
 * перкуссионный музыкальный инструмент — треугольник. Ему нужно узнать, какова частота звука, издаваемого его
 * инструментом. У Максима есть профессиональный музыкальный тюнер, с помощью которого можно проигрывать ноту
 * с заданной частотой. Максим действует следующим образом: он включает на тюнере ноты с разными частотами и для
 * каждой ноты на слух определяет, ближе или дальше она к издаваемому треугольником звуку, чем предыдущая нота.
 * Поскольку слух у Максима абсолютный, он определяет это всегда абсолютно верно. Вам Максим показал запись,
 * в которой приведена последовательность частот, выставляемых им на тюнере, и про каждую ноту, начиная со второй,
 * записано — ближе или дальше она к звуку треугольника, чем предыдущая нота. Заранее известно, что частота звучания
 * треугольника Максима составляет не менее 30 герц и не более 4000 герц. Требуется написать программу, которая
 * определяет, в каком интервале может находиться частота звучания треугольника.
 *
 * Формат ввода
 * Первая строка входного файла содержит целое число n — количество нот, которые воспроизводил Максим с помощью
 * тюнера (2 ≤ n ≤ 1000). Последующие n строк содержат записи Максима, причём каждая строка содержит две компоненты:
 * вещественное число fi — частоту, выставленную на тюнере, в герцах (30 ≤ fi ≤ 4000), и слово «closer»
 * или слово «further» для каждой частоты, кроме первой.
 *
 * Слово «closer» означает, что частота данной ноты ближе к частоте звучания треугольника, чем частота предыдущей
 * ноты, что формально описывается соотношением: |fi − ftriangle| < |fi − 1 − ftriangle|.
 *
 * Слово «further» означает, что частота данной ноты дальше, чем предыдущая.
 *
 * Если оказалось, что очередная нота так же близка к звуку треугольника, как и предыдущая нота, то Максим мог
 * записать любое из двух указанных выше слов.
 * Гарантируется, что результаты, полученные Максимом, непротиворечивы.
 *
 * Формат вывода
 * В выходной файл необходимо вывести через пробел два вещественных числа — наименьшее и наибольшее возможное
 * значение частоты звучания треугольника, изготовленного Максимом. Числа должны быть выведены
 * с точностью не хуже 10−6.
 */

function findFrequency(n, list) {
    const frequencyRange = [30, 4000];
    const intersectFreq = (low, high) => {
        frequencyRange[0] = Math.max(frequencyRange[0], low);
        frequencyRange[1] = Math.min(frequencyRange[1], high);
    };

    let prevFreq = list[0][0];
    let currFreq;
    let stateFreq;

    for (let i = 1; i < n; i++) {
        currFreq = list[i][0];
        stateFreq = list[i][1];
        switch (true) {
            case prevFreq < currFreq && stateFreq === "closer":
                intersectFreq((prevFreq + currFreq) / 2, 4000);
                break;
            case prevFreq > currFreq && stateFreq === "closer":
                intersectFreq(30, (prevFreq + currFreq) / 2);
                break;
            case prevFreq < currFreq && stateFreq === "further":
                intersectFreq(30, (prevFreq + currFreq) / 2);
                break;
            case prevFreq > currFreq && stateFreq === "further":
                intersectFreq((prevFreq + currFreq) / 2, 4000);
                break;
        }
        prevFreq = currFreq;
    }

    return frequencyRange;
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
    const list = [];

    for (let i = 0; i < n; i++) {
        list.push(readArray());
    }

    const result = findFrequency(n, list);

    console.log(result.map((v) => v.toFixed(6)).join(" "));
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
        .map((num, i) => (i === 0 ? Number(num) : num));
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

module.exports = findFrequency;
