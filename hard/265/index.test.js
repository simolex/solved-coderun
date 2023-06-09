const snake = require(".");

const field = [
    "ooo------Y--AND------",
    "-----EXY--A--N---D--E",
    "-X-----Y--A-N---D----",
    "------EXY----A---N---",
    "--DE--X---------YA---",
    "-----ND---EXY--AN--D-",
    "----E-----X-Y----A--N",
    "D-----E-XY---AN---D--",
    "E--------------------",
    "-------X---Y------A-N",
    "----D-EX----------YA-",
    "--N-DEX--Y-A--N-----D",
    "E------X--Y----------",
];

const moves = `R 12 D 2 R 2 U 1 R 2`;

describe("Snake", () => {
    test("test", () => {
        const result = snake(field, moves);
        expect(result).toEqual([[1, 18], 9]);
    });
});
