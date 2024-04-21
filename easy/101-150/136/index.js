/**
 * 136. SNTP
 *
 * Для того чтобы компьютеры поддерживали актуальное время, они могут обращаться к серверам точного времени SNTP
 * (Simple Network Time Protocol). К сожалению, компьютер не может просто получить время у сервера, потому
 * что информация по сети передаётся не мгновенно: пока сообщение с текущим временем дойдёт до компьютера,
 * оно потеряет свою актуальность. Протокол взаимодействия клиента (компьютера, запрашивающего точное время)
 * и сервера (компьютера, выдающего точное время) выглядит следующим образом:
 *
 * + Клиент отправляет запрос на сервер и запоминает время отправления A (по клиентскому времени).
 * + Сервер получает запрос в момент времени B (по точному серверному времени) и отправляет клиенту сообщение,
 *   содержащее время B.
 * + Клиент получает ответ на свой запрос в момент времени C (по клиентскому времени) и запоминает его. Теперь
 *   клиент, из предположения, что сетевые задержки при передаче сообщений от клиента серверу и от сервера клиенту
 *   одинаковы, может определить и установить себе точное время, используя известные значения A, B, C.
 *
 * Вам предстоит реализовать алгоритм, с точностью до секунды определяющий точное время для установки на клиенте
 * по известным A, B и C. При необходимости округлите результат до целого числа секунд по правилам арифметики
 * (в меньшую сторону, если дробная часть числа меньше 1/2, иначе в большую сторону).
 * Возможно, что, пока клиент ожидал ответа, по клиентскому времени успели наступить новые сутки, однако известно,
 * что между отправкой клиентом запроса и получением ответа от сервера прошло менее 24 часов.
 *
 * Формат ввода:
 * Программа получает на вход три временные метки A, B, C, по одной в каждой строке. Все временные метки
 * представлены в формате «hh:mm:ss», где «hh» – это часы, «mm» – минуты, «ss» – секунды. Часы, минуты и секунды
 * записываются ровно двумя цифрами каждое (возможно, с дополнительными нулями в начале числа).
 *
 * Формат вывода:
 * Программа должна вывести одну временную метку в формате, описанном во входных данных, – вычисленное точное время
 * для установки на клиенте. В выводе не должно быть пробелов, пустых строк в начале вывода.
 *
 * Примечания:
 */

function SNTP(a, b, c) {
    const timeA = new Date(`1970-01-01T${a}.000Z`);
    const timeB = new Date(`1970-01-01T${b}.000Z`);
    const timeC = new Date(`1970-01-02T${c}.000Z`);
    const oneDay = new Date(`1970-01-02T00:00:00.000Z`);

    const rangeTime = (timeC.getTime() - timeA.getTime()) % oneDay.getTime();
    const resultTime = new Date(timeB.getTime() + Math.round(rangeTime / 2) + 500);

    return resultTime.toISOString().substring(11, 19);
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
    const a = readString();
    const b = readString();
    const c = readString();

    const result = SNTP(a, b, c);

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

module.exports = SNTP;
