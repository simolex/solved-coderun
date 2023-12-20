const solution = require(".");

describe("100. approximate binary search", () => {
    test("test-1", () => {
        const result = solution(5, 5, [1, 3, 5, 7, 9], [2, 4, 8, 1, 6]);
        expect(result).toEqual([1, 3, 7, 1, 5]);
    });
    test("test-2", () => {
        const result = solution(6, 11, [1, 1, 4, 4, 8, 120], [1, 2, 3, 4, 5, 6, 7, 8, 63, 64, 65]);
        expect(result).toEqual([1, 1, 4, 4, 4, 4, 8, 8, 8, 8, 120]);
    });
    test("test-3", () => {
        const result = solution(
            10,
            10,
            [-5, 1, 1, 3, 5, 5, 8, 12, 13, 16],
            [0, 3, 7, -17, 23, 11, 0, 11, 15, 7]
        );
        expect(result).toEqual([1, 3, 8, -5, 16, 12, 1, 12, 16, 8]);
    });
});
