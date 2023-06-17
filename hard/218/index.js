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

    const createDot = (x, y) => ({ currentTik: { buffer: [], count: 0 }, nextTik: { buffer: [{ x, y }], count: 1 } });
    const inMap = (x, y) => x > 0 && x < widthPot - 1 && y > 0 && y < heightPot - 1;
    const markVisited = (x, y) => (map[y][x] = "~");

    const isLetter = (x, y) => {
        const ch = map[y][x].charCodeAt(0);
        return ch >= 65 && ch <= 90;
    };
    const isEmpty = (x, y) => map[y][x] === " ";
    const isPosable = (x, y) => map[y][x] !== "~"; //isLetter(x, y) || isEmpty(x, y);

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
    const directions = [
        [-1, 0],
        [0, -1],
        [1, 0],
        [0, 1]
    ];
    let dotsCount = Object.keys(dots).length;
    while (dotsCount > 0) {
        tik++;
        for (let dotKey in dots) {
            if (dots[dotKey].isEmpty) continue;
            dots[dotKey].saveCurrentTik = dots[dotKey].currentTik;
            dots[dotKey].currentTik = dots[dotKey].nextTik;
            dots[dotKey].nextTik = dots[dotKey].saveCurrentTik;
            dots[dotKey].nextTik.count = 0;

            let findedLetter = false;
            for (let i = 0; i < dots[dotKey].currentTik.count; i++) {
                const { x: currentX, y: currentY } = dots[dotKey].currentTik.buffer[i];
                if (isLetter(currentX, currentY)) {
                    findedLetter = true;
                }
                directions.forEach(([dx, dy]) => {
                    if (inMap(currentX + dx, currentY + dy) && isPosable(currentX + dx, currentY + dy)) {
                        if (!dots[dotKey].nextTik.buffer[dots[dotKey].nextTik.count]) {
                            dots[dotKey].nextTik.buffer[dots[dotKey].nextTik.count] = {};
                        }
                        dots[dotKey].nextTik.buffer[dots[dotKey].nextTik.count].x = currentX + dx;
                        dots[dotKey].nextTik.buffer[dots[dotKey].nextTik.count].y = currentY + dy;
                        dots[dotKey].nextTik.count++;
                    }
                });
                markVisited(currentX, currentY);
            }
            if (findedLetter) maxTik = Math.max(maxTik, tik);
            if (dots[dotKey].nextTik.count === 0) {
                dots[dotKey].isEmpty = true;
                dotsCount--;
            }
        }
    }
    return maxTik; //timeInSec; // Время в секундах, за которое все буквы вытекли
};
