/**
 * 82. Кондиционер
 *
 * В офисе, где работает программист Петр, установили кондиционер нового типа. Этот кондиционер отличается особой
 * простотой в управлении. У кондиционера есть всего лишь два управляемых параметра: желаемая температура и режим
 * работы. Кондиционер может работать в следующих четырех режимах:
 * «freeze» — охлаждение. В этом режиме кондиционер может только уменьшать температуру. Если температура в комнате
 * и так не больше желаемой, то он выключается.
 * «heat» — нагрев. В этом режиме кондиционер может только увеличивать температуру. Если температура в комнате
 * и так не меньше желаемой, то он выключается.
 * «auto» — автоматический режим. В этом режиме кондиционер может как увеличивать, так и уменьшать температуру
 * в комнате до желаемой.
 * «fan» — вентиляция. В этом режиме кондиционер осуществляет только вентиляцию воздуха и не изменяет температуру
 * в комнате.
 * Кондиционер достаточно мощный, поэтому при настройке на правильный режим работы он за час доводит температуру
 * в комнате до желаемой.
 * Требуется написать программу, которая по заданной температуре в комнате troom, установленным на кондиционере
 * желаемой температуре tcond и режиму работы определяет температуру, которая установится в комнате через час.
 *
 * Формат ввода:
 * Первая строка входного файла содержит два целых числа troom, и tcond, разделенных ровно одним пробелом
 * (–50 ≤ troom ≤ 50, –50 ≤ tcond ≤ 50). Вторая строка содержит одно слово, записанное строчными буквами
 * латинского алфавита — режим работы кондиционера.
 *
 * Формат вывода:
 * Выходной файл должен содержать одно целое число — температуру, которая установится в комнате через час
 */

function getTemperature(tRoom, tCond, command) {
    let result;
    switch (command) {
        case "freeze":
            result = tRoom > tCond ? tCond : tRoom;
            break;
        case "heat":
            result = tRoom > tCond ? tRoom : tCond;
            break;
        case "auto":
            result = tCond;
            break;
        case "fan":
            result = tRoom;
            break;
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
    const temp = readArray();
    const tRoom = temp[0];
    const tCond = temp[1];
    const command = readString();

    const result = getTemperature(tRoom, tCond, command);

    console.log(result);
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

function readString() {
    var arr = _inputLines[_curLine].trim();
    _curLine++;
    return arr;
}

module.exports = getTemperature;
