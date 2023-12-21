const solution = require(".");

describe("108. Median union", () => {
    test("test-1", () => {
        const result = solution(3, 6, [
            [1, 4, 7, 10, 13, 16],
            [0, 2, 5, 9, 14, 20],
            [1, 7, 16, 16, 21, 22],
        ]);
        expect(result).toEqual([7, 10, 9]);
    });
});
