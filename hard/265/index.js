/**
 * @param {string[]} field - описание поля в виде массива строк
 * @param {string} moves - строка со всеми движениями змейки
 * @returns {[number[], number]}
 */
module.exports = function (field, moves) {
    const setMoves = moves.split(" ");
    let x = 0;
    let y = 2;

    let snakeLength = 3;

    const getEat = (x, y) => (["Y", "A", "N", "D", "E", "X"].includes(field[x][y]) ? 1 : 0);

    const move = (dx, dy, count = 0) => {
        for (let m = 0; m < count; m++) {
            x += dx;
            y += dy;
            snakeLength += getEat(x, y);
        }
    };

    for (let i = 0; i < setMoves.length; i += 2) {
        switch (setMoves[i]) {
            case "U":
                move(-1, 0, setMoves[i + 1]);
                break;
            case "R":
                move(0, 1, setMoves[i + 1]);
                break;
            case "L":
                move(0, -1, setMoves[i + 1]);
                break;
            case "D":
                move(1, 0, setMoves[i + 1]);
                break;
        }
    }

    return [[x, y], snakeLength]; // [x, y] - координаты головы змейки, N - размер змейки
};
