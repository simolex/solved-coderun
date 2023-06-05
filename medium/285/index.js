module.exports = { scan };

function scan(matrix) {
    const initState = { ceil: 0, floor: 0, both: 0 };
    let N = matrix.length; //y
    let M = 0; //x
    if (N > 0) {
        M = matrix[0].length;
    }
    if (N + M === 0) return initState;

    const isCave = (x, y) => x >= 0 && x < M && y >= 0 && y < N;
    const isObject = (x, y) => matrix[y][x] === 1;
    const markObject = (x, y) => (matrix[y][x] = 0);
    const isTouchRoof = (y) => (y === 0 ? 1 : 0);
    const isTouchFloor = (y) => (y === N - 1 ? 1 : 0);
    const counterTouch = (prev, y) => {
        if (isTouchRoof(y)) prev.touchRoof += 1;
        if (isTouchFloor(y)) prev.touchFloor += 1;
    };

    const nextDFStep = (prevState, x, y) => {
        const stack = [[x, y]];
        const countTouch = { touchRoof: 0, touchFloor: 0 };
        while (stack.length > 0) {
            const [currentX, currentY] = stack.pop();
            if (isCave(currentX, currentY) && isObject(currentX, currentY)) {
                counterTouch(countTouch, currentY);
                [
                    [-1, 0],
                    [0, -1],
                    [1, 0],
                    [0, 1]
                ].forEach(([dx, dy]) =>
                    isCave(currentX + dx, currentY + dy) && isObject(currentX + dx, currentY + dy)
                        ? stack.push([currentX + dx, currentY + dy])
                        : false
                );
                markObject(currentX, currentY);
            }
        }

        const ceil = countTouch.touchRoof > 0 ? 1 : 0;
        const floor = countTouch.touchFloor > 0 ? 1 : 0;
        if (ceil > 0 && floor > 0) return (prevState.both += 1);

        prevState.ceil += ceil;
        prevState.floor += floor;
    };

    const result = initState;
    for (let i = 0; i < M; i++) {
        if (isObject(i, 0)) {
            nextDFStep(result, i, 0);
        }
    }

    console.log(result);

    return result;
}
