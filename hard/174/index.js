class GameBoard {
    constructor(field, size) {
        this.field = field;
        this.size = size;
    }

    _getXY(x, y) {
        throw Error("set function");
    }

    getTileValue(x, y) {
        const { _x, _y } = this._getXY(x, y);
        return this.field[_x][_y];
    }
    setTileValue(x, y, value) {
        const { _x, _y } = this._getXY(x, y);
        this.field[_x][_y] = value;
    }

    move(strategyGetXY) {
        this._getXY = strategyGetXY;
        for (let x = 0; x < this.size; x++) {
            let prevIndex = 0;
            for (let y = 1; y < this.size; y++) {
                const prevValue = this.getTileValue(x, prevIndex);
                const currentValue = this.getTileValue(x, y);
                if (prevValue === 0 && currentValue > 0) {
                    this.setTileValue(x, prevIndex, currentValue);
                    this.setTileValue(x, y, prevValue);
                    y = prevIndex;
                    prevIndex++;
                }
                if (prevValue > 0) {
                    prevIndex++;
                }
            }

            for (let y = 0; y < this.size - 1; y++) {
                const currentValue = this.getTileValue(x, y);
                const nextValue = this.getTileValue(x, y + 1);

                if (currentValue === nextValue && currentValue > 0) {
                    this.setTileValue(x, y, currentValue + nextValue);
                    this.setTileValue(x, y + 1, 0);
                    for (let s = y + 1; s < this.size - 1; s++) {
                        const nextValue = this.getTileValue(x, s + 1);
                        this.setTileValue(x, s + 1, this.getTileValue(x, s));
                        this.setTileValue(x, s, nextValue);
                    }
                }
            }
        }
    }
}

/**
 * @param {string[]} field - описание поля в виде массива строк
 * @param {string} moves - строка со всеми движениями змейки
 * @returns {[number[], number]}
 */
module.exports = function solution(field, moves = "") {
    const setMoves = moves.split("");

    const moveLeft = (x, y) => ({ _x: x, _y: y });
    const moveRight = (x, y) => ({ _x: x, _y: size - y - 1 });
    const moveUp = (x, y) => ({ _x: y, _y: x });
    const moveDown = (x, y) => ({ _x: size - y - 1, _y: x });

    const size = field[0].length;
    const game = new GameBoard(field, size);

    for (let i = 0; i < setMoves.length; i += 1) {
        switch (setMoves[i]) {
            case "U":
                game.move(moveUp);
                break;

            case "R":
                game.move(moveRight);
                break;

            case "L":
                game.move(moveLeft);
                break;

            case "D":
                game.move(moveDown);
                break;
        }
    }

    return field;
};
