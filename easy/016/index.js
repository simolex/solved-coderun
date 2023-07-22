function getTransferCount(buttons, s) {
    return 0;
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
    const N = readNumber();
    const mapStations = readStations();
    const points = readArray();

    // console.log(N);
    // console.log(mapStations);
    // console.log(points);

    const ans = getTransferCount(N, mapStations, points);
    console.log(ans);
}

function readArray() {
    var arr = _inputLines[_curLine].trim(" ").split(" ");
    //.map((num) => Number(num));
    _curLine++;
    return arr;
}

// function readLine() {
//     const line = _inputLines[_curLine];
//     _curLine++;
//     return line;
// }

function readNumber() {
    return Number(_inputLines[_curLine++]);
}

function readStations() {
    const M = readNumber();

    let stations = [];
    for (let i = 0; i < M; i++) {
        stations.push(readArray());
    }
    return stations;
}

module.exports = getTransferCount;
