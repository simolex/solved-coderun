/**
 * 109. Медиана объединения-2
 *
 * Дано N упорядоченных по неубыванию последовательностей целых чисел (т.е. каждый следующий элемент больше либо равен
 * предыдущему), в каждой из последовательностей ровно L элементов. Для каждых двух последовательностей выполняют
 * следующую операцию: объединяют их элементы (в объединенной последовательности каждое число будет идти столько раз,
 * сколько раз оно встречалось суммарно в объединяемых последовательностях), упорядочивают их по неубыванию и смотрят,
 * какой элемент в этой последовательности из 2L элементов окажется на месте номер L (этот элемент называют левой медианой).
 * Напишите программу, которая для каждой пары последовательностей выведет левую медиану их объединения.
 *
 * Формат ввода:
 * Сначала вводятся числа N и L (2 ≤ N ≤ 200, 1 ≤ L ≤ 50000). В следующих N строках задаются параметры, определяющие
 * последовательности.
 * Каждая последовательность определяется пятью целочисленными параметрами: x1, d1, a, c, m. Элементы последовательности
 * вычисляются по следующим формулам: x1 нам задано, а для всех i от 2 до L: xi = xi–1+di–1. Последовательность di
 * определяется следующим образом: d1 нам задано, а для i ≥ 2 di = ((a*di–1+c) mod m), где mod – операция получения
 * остатка от деления (a*di–1+c) на m.
 * Для всех последовательностей выполнены следующие ограничения: 1 ≤ m ≤ 40000, 0 ≤ a < m, 0≤c<m, 0≤d1<m. Гарантируется,
 * что все члены всех последовательностей по модулю не превышают 109.
 *
 * Формат вывода:
 * В первой строке выведите медиану объединения 1-й и 2-й последовательностей,
 * во второй строке — объединения 1-й и 3-й,
 * и так далее, в (N‑1)-ой строке — объединения 1-й и N-ой последовательностей,
 * далее медиану объединения 2-й и 3-й, 2-й и 4-й, и т.д. до 2-й и N-ой, затем 3-й и 4-й и так далее.
 * В последней строке должна быть выведена медиана объединения (N–1)-й и N-ой последовательностей.
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

    return setOfSets;
}

function getMedianUnion_2(N, L, setOfParams) {
    const result = [];
    const setOfSets = initSequence(N, L, setOfParams);

    const isPosition = (index, set, median) => {
        return set[index] < median;
    };

    const isPositionBe = (index, set, median) => {
        return set[index] <= median;
    };

    const getCountLeft = (set, median) => {
        const pos = rightSearch(0, L - 1, isPosition, set, median);
        if (pos === L - 1) {
            return L;
        }
        return pos + 1;
    };

    const isMedian = (mayMedian, set_1, set_2, curPos) => {
        const count_1 = getCountLeft(set_1, mayMedian);
        const count_2 = getCountLeft(set_2, mayMedian);

        console.log(mayMedian, count_1, count_2, set_1, set_2);

        const sumPosition = count_1 + count_2;
        curPos[0] = count_1;
        curPos[1] = count_2;

        return sumPosition > L - 1 && 2 * L - sumPosition <= L;
    };

    let mayBeMedian;
    const curSet = [];
    let minInSet, maxInSet;
    let currentMedian;
    let curPos = [];

    for (let i = 0; i < N - 1; i++) {
        for (let j = i + 1; j < N; j++) {
            curSet[0] = setOfSets[i];
            curSet[1] = setOfSets[j];

            minInSet = Math.min(curSet[0][0], curSet[1][0]);
            maxInSet = Math.max(curSet[0][L - 1], curSet[1][L - 1]);

            currentMedian = leftSearch(minInSet, maxInSet, isMedian, curSet[0], curSet[1], curPos);
            console.log(currentMedian, curPos);
            // mayBeMedian = curPos.map((p, i) => Math.abs(curSet[i][p - 1] - currentMedian));
            // currentMedian =
            //     mayBeMedian[0] > mayBeMedian[1]
            //         ? curSet[1][curPos[1] - 1]
            //         : curSet[0][curPos[0] - 1];
            // console.log(currentMedian);

            result.push(currentMedian);
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
