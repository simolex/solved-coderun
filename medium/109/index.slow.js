/**
 * 109. Медиана объединения-2
 *
 *  Не оптимальное решение для тестов
 */

const leftSearch = (l, r, checkFn, ...checkParams) => {
    let m;
    while (l < r) {
        m = l + Math.floor((r - l) / 2);
        if (checkFn(m, ...checkParams)) {
            r = m;
        } else {
            l = m + 1;
        }
    }
    return l;
};

const rightSearch = (l, r, checkFn, ...checkParams) => {
    let m;
    while (l < r) {
        m = l + Math.ceil((r - l) / 2);
        if (checkFn(m, ...checkParams)) {
            l = m;
        } else {
            r = m - 1;
        }
    }
    return l;
};

function initSequence(N, L, setOfParams) {
    const setOfSets = [];

    let seqID;
    let curSeq_D;

    const setSequence_D = new Map();

    for (let i = 0; i < N; i++) {
        const newSet = [];
        seqID = JSON.stringify(setOfParams[i].slice(1));

        if (!setSequence_D.has(seqID)) {
            curSeq_D = [];
            curSeq_D[0] = setOfParams[i][1];

            const pA = setOfParams[i][2];
            const pC = setOfParams[i][3];
            const pM = setOfParams[i][4];

            for (let i = 1; i < L; i++) {
                curSeq_D[i] = (pA * curSeq_D[i - 1] + pC) % pM;
            }

            setSequence_D.set(seqID, curSeq_D);
        }

        curSeq_D = setSequence_D.get(seqID);

        newSet[0] = setOfParams[i][0];
        for (let i = 1; i < L; i++) {
            newSet[i] = newSet[i - 1] + curSeq_D[i - 1];
        }

        setOfSets[i] = newSet;
    }
    // delete setSequence_D;

    return setOfSets;
}

function getMedianUnion_2(N, L, setOfParams) {
    const result = [];
    const setOfSets = initSequence(N, L, setOfParams);

    const isPosition = (index, set, value) => {
        return value >= set[index];
    };

    const isMedian = (mayMedian, set_1, set_2) => {
        const posFromLeft_1 = rightSearch(0, L - 1, isPosition, set_1, mayMedian);
        const posFromLeft_2 = rightSearch(0, L - 1, isPosition, set_2, mayMedian);
        const sumPosition = posFromLeft_1 + posFromLeft_2 + 2;

        return sumPosition >= L - 1 && 2 * L - sumPosition <= L;
    };

    let firstSet, secondSet;
    let minInSet, maxInSet;
    let currentMedian;

    for (let i = 0; i < N - 1; i++) {
        for (let j = i + 1; j < N; j++) {
            let curNum;
            let firstPtr = 0;
            let seconPtr = 0;
            const firstSet = setOfSets[i];
            const secondSet = setOfSets[j];

            for (let k = 0; k < L; k++) {
                if (firstSet[firstPtr] < secondSet[seconPtr]) {
                    curNum = firstSet[firstPtr];
                    firstPtr++;
                } else {
                    curNum = secondSet[seconPtr];
                    seconPtr++;
                }
            }
            result.push(curNum);
        }
    }

    return result;
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
    const params = readArray();
    const N = params[0];
    const L = params[1];

    const setOfParams = [];
    for (let i = 0; i < N; i++) {
        setOfParams.push(readArray());
    }

    const result = getMedianUnion_2(N, L, setOfParams);

    console.log(result.join("\n"));
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
    const s = _inputLines[_curLine].trim();
    _curLine++;
    return s;
}

module.exports = getMedianUnion_2;
