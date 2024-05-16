/**
 * 30. Буратино
 */

function pappaKarlo(telecasts) {
    let n = telecasts.length;
    const dp = [];

    const getTimeInSecond = (time) => {
        return new Date(`1970-01-01T${time}.000Z`).getTime() / 1000;
    };

    const startWork = getTimeInSecond("09:00:00");
    let endWork = getTimeInSecond("18:00:00");

    let currentTimeCast = 0; // текущая телепередача
    const getEfficiency = (currentTime) => {
        while (
            currentTimeCast < n + 1 &&
            (currentTime < telecasts[currentTimeCast][0] ||
                currentTime >= telecasts[currentTimeCast + 1][0])
        ) {
            currentTimeCast++;
        }
        return telecasts[currentTimeCast][1];
    };

    const stepDP = (j) => {
        const efficiency = getEfficiency(j);

        dp[j] = Math.max(dp[j], dp[j - 1]);

        if (j + efficiency <= endWork) {
            dp[j + efficiency] = Math.max(dp[j + efficiency], dp[j] + 1);
        }
    };

    for (let i = 0; i < n; i++) {
        telecasts[i][0] = getTimeInSecond(telecasts[i][0]);
    }

    if (telecasts[n - 1][0] < endWork) {
        telecasts.push([endWork, 0]);
        n++;
    }
    for (let j = startWork - 1; j <= endWork; j++) {
        dp[j] = 0;
    }

    endWork = getTimeInSecond("13:00:00");
    for (let j = getTimeInSecond("09:00:00"); j < endWork; j++) {
        stepDP(j);
    }
    dp[endWork] = Math.max(dp[endWork], dp[endWork - 1]);

    dp[endWork + 3600] = Math.max(dp[endWork], dp[endWork + 3600]);

    endWork = getTimeInSecond("18:00:00");
    for (let j = getTimeInSecond("14:00:00"); j < endWork; j++) {
        stepDP(j);
    }
    dp[endWork] = Math.max(dp[endWork], dp[endWork - 1]);

    return dp[endWork];
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
    const n = readInt();
    const telecasts = [];

    for (let i = 0; i < n; i++) {
        const telecast = readStringArray();
        telecast[1] = Number(telecast[1]);
        telecasts.push(telecast);
    }

    const result = pappaKarlo(telecasts);

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

module.exports = pappaKarlo;
