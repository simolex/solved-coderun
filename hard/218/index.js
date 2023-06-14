module.exports = function (mapString) {
    const mapLines = mapString.trim().split("\n");
    const map = mapLines.reduce((mapArray, line) => {
        mapArray.push(line.trim().split(""));
        return mapArray;
    }, []);
    const heightPot = map.length;
    const widthPot = map[0].length;
    const dots = {};

    const isNumber = (n) => !isNaN(parseFloat(n)) && !isNaN(n - 0);

    const createDot = (x, y) => ({ currentTik: [], nextTik: [[x, y]] });
    const inMap = (x, y) => x > 0 && x < widthPot - 1 && y > 0 && y < heightPot - 1;
    const markVisited = (x, y) => (map[y][x] = "~");

    const isLetter = (x, y) => {
        const ch = map[y][x].charCodeAt(0);
        return ch >= 65 && ch <= 90;
    };
    const isEmpty = (x, y) => map[y][x] === " ";
    const isPosable = (x, y) => isLetter(x, y) || isEmpty(x, y);

    for (let i = 1; i < widthPot - 1; i++) {
        if (isNumber(map[0][i])) dots[map[0][i]] = createDot(i, 0);
        if (isNumber(map[heightPot - 1][i])) dots[map[heightPot - 1][i]] = createDot(i, heightPot - 1);
    }

    for (let i = 1; i < heightPot - 1; i++) {
        if (isNumber(map[i][0])) dots[map[i][0]] = createDot(0, i);
        if (isNumber(map[i][widthPot - 1])) dots[map[i][widthPot - 1]] = createDot(widthPot - 1, i);
    }
    let maxTik = 1;
    let tik = 0;
    while (Object.keys(dots).length > 0) {
        tik++;
        for (let dotKey in dots) {
            dots[dotKey].currentTik = dots[dotKey].nextTik;
            delete dots[dotKey].nextTik;
            dots[dotKey].nextTik = [];

            let findedLetter = false;
            for (const [currentX, currentY] of dots[dotKey].currentTik) {
                if (isLetter(currentX, currentY)) {
                    findedLetter = true;
                }
                [
                    [-1, 0],
                    [0, -1],
                    [1, 0],
                    [0, 1]
                ].forEach(([dx, dy]) =>
                    inMap(currentX + dx, currentY + dy) && isPosable(currentX + dx, currentY + dy)
                        ? dots[dotKey].nextTik.push([currentX + dx, currentY + dy])
                        : false
                );
                markVisited(currentX, currentY);
            }
            if (findedLetter) maxTik = Math.max(maxTik, tik);
            if (dots[dotKey].nextTik.length === 0) delete dots[dotKey];
        }
    }

    return maxTik; //timeInSec; // Время в секундах, за которое все буквы вытекли
};
