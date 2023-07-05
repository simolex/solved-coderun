module.exports = function (mapString) {
    const encoder = new TextEncoder();
    const binArray = encoder.encode(mapString);
    const lenArray = binArray.length;

    let widthPot = 0;
    while (binArray[widthPot] !== 10 && widthPot < binArray.length) {
        widthPot++;
    }
    const heightPot = Math.ceil(lenArray / (widthPot + 1));

    let maskPushPointer = 0;
    let maskShiftPointer = 0;
    const bufferX = new ArrayBuffer(lenArray * 2);
    const bufferY = new ArrayBuffer(lenArray * 2);
    const maskDeckX = new Uint16Array(bufferX);
    const maskDeckY = new Uint16Array(bufferY);

    const bufferBoard = new ArrayBuffer(lenArray);
    const maskBoard = new Uint8Array(bufferBoard);

    const isNumber = (n) => n > 47 && n < 58;

    const getChar = (x, y) => binArray[y * (widthPot + 1) + x];
    const mark = (x, y) => {
        maskBoard[y * (widthPot + 1) + x] = 1;
    };
    const visited = (x, y) => maskBoard[y * (widthPot + 1) + x] === 1;

    const createDot = (x, y) => ({
        currentTik: { buffer: [], count: 0 },
        nextTik: { buffer: [{ x, y }], count: 1 }
    });

    for (let i = 0; i < widthPot; i++) {
        if (isNumber(getChar(i, 0))) {
            maskDeckX[maskPushPointer] = i;
            maskDeckY[maskPushPointer] = 0;
            maskPushPointer++;
            mark(i, 0);
        }
        if (isNumber(getChar(i, heightPot - 1))) {
            maskDeckX[maskPushPointer] = i;
            maskDeckY[maskPushPointer] = heightPot - 1;
            maskPushPointer++;
            mark(i, heightPot - 1);
        }
    }

    for (let i = 0; i < heightPot; i++) {
        if (isNumber(getChar(0, i))) {
            maskDeckX[maskPushPointer] = 0;
            maskDeckY[maskPushPointer] = i;
            maskPushPointer++;
            mark(0, i);
        }
        if (isNumber(getChar(widthPot - 1, i))) {
            maskDeckX[maskPushPointer] = widthPot - 1;
            maskDeckY[maskPushPointer] = i;
            maskPushPointer++;
            mark(widthPot - 1, i);
        }
    }

    let maxTik = 1;
    let tik = 0;
    const directions = [
        [-1, 0],
        [0, -1],
        [1, 0],
        [0, 1]
    ];

    let tikPushPointer;
    while (maskShiftPointer < maskPushPointer) {
        tik++;
        tikPushPointer = maskPushPointer;
        while (maskShiftPointer < tikPushPointer) {
            const currentX = maskDeckX[maskShiftPointer];
            const currentY = maskDeckY[maskShiftPointer];
            maskShiftPointer++;
            const ch = getChar(currentX, currentY);

            if (ch >= 65 && ch <= 90) {
                maxTik = tik;
            }

            mark(currentX, currentY);

            directions.forEach(([dx, dy]) => {
                const x = currentX + dx;
                const y = currentY + dy;
                if (x >= 0 && x < widthPot && y >= 0 && y < heightPot && !visited(x, y)) {
                    maskDeckX[maskPushPointer] = x;
                    maskDeckY[maskPushPointer] = y;
                    maskPushPointer++;
                    mark(x, y);
                }
            });
        }
    }
    return maxTik;
};
