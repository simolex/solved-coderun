const game2048 = require(".");

const field = [
    [0, 2, 4, 8],
    [0, 0, 0, 0],
    [0, 2, 2, 8],
    [0, 2, 2, 2]
];

describe("Snake", () => {
    test("test", () => {
        const result = game2048(JSON.parse(JSON.stringify(field)), `U U U`);
        expect(result).toEqual([
            [0, 4, 8, 16],
            [0, 2, 0, 2],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]);
    });

    test("test", () => {
        const result = game2048(JSON.parse(JSON.stringify(field)), `U U U L U R R`);
        expect(result).toEqual([
            [0, 0, 0, 32],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]);
    });

    test("test", () => {
        const result = game2048(
            [
                [2, 2, 2, 2],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ],
            `R`
        );
        expect(result).toEqual([
            [0, 0, 4, 4],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]);
    });
    test("test", () => {
        const result = game2048(
            [
                [128, 64, 32, 16],
                [64, 32, 16, 8],
                [32, 16, 8, 4],
                [16, 8, 4, 2]
            ],
            `R U L D R U L D `
        );
        expect(result).toEqual([
            [128, 64, 32, 16],
            [64, 32, 16, 8],
            [32, 16, 8, 4],
            [16, 8, 4, 2]
        ]);
    });

    test("test", () => {
        const result = game2048(
            [
                [2, 2, 2, 2],
                [2, 2, 2, 2],
                [2, 2, 2, 2],
                [2, 2, 2, 2]
            ],
            `D L R R U`
        );
        expect(result).toEqual([
            [0, 0, 0, 32],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]);
    });
    test("test", () => {
        const result = game2048(
            [
                [4, 2, 2, 2],
                [2, 2, 2, 2],
                [2, 2, 2, 2],
                [2, 2, 2, 2]
            ],
            `L`
        );
        expect(result).toEqual([
            [4, 4, 2, 0],
            [4, 4, 0, 0],
            [4, 4, 0, 0],
            [4, 4, 0, 0]
        ]);
    });
    test("test", () => {
        const result = game2048(
            [
                [8, 0, 0, 0],
                [8, 0, 0, 0],
                [0, 0, 0, 0],
                [16, 0, 0, 0]
            ],
            `D`
        );
        expect(result).toEqual([
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [16, 0, 0, 0],
            [16, 0, 0, 0]
        ]);
    });

    test("test", () => {
        const result = game2048(
            [
                [8, 0, 0, 0],
                [8, 0, 0, 0],
                [0, 0, 0, 0],
                [8, 0, 0, 0]
            ],
            `D`
        );
        expect(result).toEqual([
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [8, 0, 0, 0],
            [16, 0, 0, 0]
        ]);
    });

    test("test", () => {
        const result = game2048(
            [
                [8, 0, 0, 0],
                [8, 0, 0, 0],
                [0, 0, 0, 0],
                [8, 0, 0, 0]
            ],
            `U`
        );
        expect(result).toEqual([
            [16, 0, 0, 0],
            [8, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]);
    });
});
