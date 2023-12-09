const solution = require(".");

describe("92. Tourism", () => {
    test("test-1", () => {
        const result = solution(
            7,
            [
                [2, 1],
                [4, 5],
                [7, 4],
                [8, 2],
                [9, 6],
                [11, 3],
                [15, 3]
            ],
            1,
            [[2, 6]]
        );
        expect(result).toEqual([4]);
    });
    test("test-2", () => {
        const result = solution(
            6,
            [
                [1, 1],
                [3, 2],
                [5, 6],
                [7, 2],
                [10, 4],
                [11, 1]
            ],
            3,
            [
                [5, 6],
                [1, 4],
                [4, 2]
            ]
        );
        expect(result).toEqual([0, 5, 4]);
    });
    test("test-4", () => {
        const result = solution(
            2,
            [
                [7, 12],
                [9, 19]
            ],
            10,
            [
                [2, 1],
                [2, 1],
                [2, 1],
                [2, 2],
                [2, 1],
                [1, 1],
                [2, 2],
                [1, 2],
                [1, 1],
                [1, 2]
            ]
        );
        expect(result).toEqual([0, 0, 0, 0, 0, 0, 0, 7, 0, 7]);
    });
});
