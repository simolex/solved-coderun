const solution = require(".");

describe("138. Rectangle sum", () => {
    test("test-1", () => {
        const result = solution(
            3,
            3,
            [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
            ],
            2,
            [
                [2, 2, 3, 3],
                [1, 1, 2, 3]
            ]
        );
        expect(result).toEqual([28, 21]);
    });
});
