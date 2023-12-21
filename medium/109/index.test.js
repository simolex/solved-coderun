const solution = require(".");

describe("109. Median union v2", () => {
    test("test-1", () => {
        const result = solution(3, 6, [
            [1, 3, 1, 0, 5],
            [0, 2, 1, 1, 100],
            [1, 6, 8, 5, 11],
        ]);
        expect(result).toEqual([7, 10, 9]);
    });
    test("test-1", () => {
        const result = solution(4, 20, [
            [-1128, 259, 350, 243, 397],
            [-1492, 78, 167, 276, 277],
            [67, 38, 72, 56, 107],
            [-1434, 77, 175, 215, 271],
        ]);
        expect(result).toEqual([272, 572, 278, 272, -376, 278]);
    });
});
