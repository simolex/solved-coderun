/**
 * 21. Поврежденный XML
 *
 * Формат XML является распространённым способом обмена данными между различными программами. Недавно
 * программист Иванов написал небольшую программу, которая сохраняет некоторую важную информацию в виде
 * XML-строки.
 * XML-строка состоит из открывающих и закрывающих тегов.
 * Открывающий тег начинается с открывающей угловой скобки ( < ), за ней следует имя тега — непустая строка
 * из строчных букв латинского алфавита, а затем закрывающая угловая скобка ( > ).
 * Примеры открывающих тегов: <a> , <dog>.
 * Закрывающий тег начинается с открывающей угловой скобки, за ней следует прямой слеш (/),
 * затем имя тега — непустая строка из строчных букв латинского алфавита, а затем закрывающая угловая скобка.
 * Примеры закрывающихся тегов: </a> , </dog>.
 * XML-строка называется корректной, если она может быть получена по следующим правилам:
 * • Пустая строка является корректной XML-строкой.
 * • Если A и B — корректные XML-строки, то строка AB, получающаяся приписыванием строки B в конец строки A,
 *   также является корректной XML-строкой.
 * • Если A — корректная XML-строка, то строка << X >> A << /X >> , получающаяся приписыванием в начало A
 *   открывающегося тега, а в конец — закрывающегося с таким же именем, также является корректной XML-строкой.
 *   Здесь X — любая непустая строка из строчных букв латинского алфавита.
 *
 * Например, представленные ниже строки:
 * <a></a><a><ab></ab><c></c></a><a></a><a></a><a></a> являются корректными XML-строками,
 * а такие строки как: <a></b><a><b><a><b></a></b> не являются корректными XML-строками.
 * Иванов отправил файл с сохраненной XML-строкой по электронной почте своему коллеге Петрову.
 * Однако, к сожалению, файл повредился в процессе пересылки: ровно один символ в строке заменился
 * на некоторый другой символ.
 * Требуется написать программу, которая по строке, которую получил Петров, восстановит исходную XML-строку,
 * которую отправлял Иванов.
 *
 * Формат ввода:
 * Входной файл содержит одну строку, которая заменой ровно одного символа может быть превращена
 * в корректную XML-строку. Длина строки лежит в пределах от 7 до 1000, включительно. Строка содержит только
 * строчные буквы латинского алфавита и символы «<» (ASCII код 60), «>»(ASCII код 62) и «/»(ASCII код 47).
 * Строка во входном файле заканчивается переводом строки.
 *
 * Формат вывода:
 * Выходной файл должен содержать корректную XML-строку, которая может быть получена из строки во входном файле
 * заменой ровно одного символа на другой. Если вариантов ответа несколько, можно вывести любой.
 *
 * Примечания:
 */

function corruptedXML(inputXML) {
    const alpha = "abcdefghijklmnopqrstuvwxyz</>";
    const alphaDict = alpha.split("").reduce((a, v, i) => {
        a.set(v, i);
        return a;
    }, new Map());
    const len = inputXML.length;
    const pattern = /^\<(\/?)([a-z]+?)\>/;
    // console.log(inputXML);
    // console.log(alphaDict);

    const isValid = (xml) => {
        const stack = [];
        let pos = 0;
        while (pos < len - 1) {
            const test = pattern.exec(xml.substring(pos));
            if (test === null) {
                return false;
            }
            if (test[1] === "") {
                stack.push(test[2]);
            } else if (stack.pop() !== test[2]) {
                return false;
            }
            pos += test[0].length;
        }
        return stack.length > 0 ? false : true;
    };

    if (len === 0 || isValid(inputXML)) {
        return inputXML;
    } else if (inputXML.charAt(0) !== "<") {
        return "<" + inputXML.substring(1);
    } else if (inputXML.charAt(len - 1) !== ">") {
        return inputXML.substring(0, len - 1) + ">";
    } else {
        for (let i = 1; i < len - 1; i++) {
            const curLetter = inputXML.charAt(i);
            const s = alphaDict.get(curLetter);
            const head = inputXML.substring(0, i);
            const tail = inputXML.substring(i + 1, len);
            for (let j = s + 1; j < s + 29; j++) {
                if (isValid(head + alpha[j % 29] + tail)) {
                    return head + alpha[j % 29] + tail;
                }
            }
        }
    }

    return "";
}

const { log } = require("console");
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
    const inputXML = readString();

    const result = corruptedXML(inputXML);

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
        .filter((str) => str && str.length > 0)
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

module.exports = corruptedXML;
