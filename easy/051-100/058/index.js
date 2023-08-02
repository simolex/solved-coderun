function getButtonCount(buttons, s) {
    const numberSet = s.split("").reduce((set, val) => set.add(val), new Set());
    let l = numberSet.size;
    buttons.map((val) => {
        if (numberSet.has(val)) {
            l--;
        }
    });
    return l;
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
    const firsLine = readArray();
    const num = readLine();

    const ans = getButtonCount(firsLine, num);
    console.log(ans);
}

function readArray() {
    var arr = _inputLines[_curLine].trim(" ").split(" ");
    //.map((num) => Number(num));
    _curLine++;
    return arr;
}

function readLine() {
    const line = _inputLines[_curLine];
    _curLine++;
    return line;
}

module.exports = getButtonCount;
