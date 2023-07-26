/**
 * 57. Инопланетный геном
 * Геном жителей системы Тау Кита содержит 26 видов оснований, для обозначения которых будем использовать
 * буквы латинского алфавита от A до Z, а сам геном записывается строкой из латинских букв.
 * Важную роль в геноме играют пары соседних оснований, например, в геноме «ABBACAB» можно выделить следующие пары
 * оснований: AB, BB, BA, AC, CA, AB.Степенью близости одного генома другому геному называется количество пар
 * соседних оснований первого генома, которые встречаются во втором геноме.Вам даны два генома, определите
 * степень близости первого генома второму геному. Программа получает на вход две строки, состоящие из заглавных
 * латинских букв. Каждая строка непустая, и её длина не превосходит 10^5. Программа должна вывести одно целое
 * число – степень близости генома, записанного в первой строке, геному, записанному во второй строке.
 *
 * Примечание:
 * Следующие пары оснований первого генома встречаются во втором геноме: AB, BB, CA, AB.
 * Обратите внимание на то, что пара AB в первом геноме встречается два раза, поэтому и подсчитана
 * в ответе два раза.
 */

function getAlienGenome(genomeOne, genomeTwo) {
    const xSet = new Map();
    const genomeOneArray = genomeOne.split("");
    let gen = "";
    for (let i = 1; i < genomeOneArray.length; i++) {
        gen = `${genomeOneArray[i - 1]}${genomeOneArray[i]}`;
        if (xSet.has(gen)) {
            xSet.set(gen, xSet.get(gen) + 1);
        } else xSet.set(gen, 1);
    }

    let count = 0;
    const genomeTwoArray = genomeTwo.split("");
    gen = "";
    for (let i = 1; i < genomeTwoArray.length; i++) {
        gen = `${genomeTwoArray[i - 1]}${genomeTwoArray[i]}`;
        if (xSet.has(gen)) {
            count += xSet.get(gen);
            xSet.delete(gen);
        }
    }

    return count;
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
    const S1 = readLine();
    const S2 = readLine();

    const ans = getAlienGenome(S1, S2);
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

module.exports = getAlienGenome;
