const solution = require(".");

describe("97. Robot", () => {
    test("test-1", () => {
        const result = solution(3, [
            [0, 0],
            [2, 2],
            [-2, 2],
        ]);
        expect(result).toBe(1);
    });
    test("test-2", () => {
        const result = solution(4, [
            [0, 0],
            [1, 1],
            [1, 0],
            [0, 1],
        ]);
        expect(result).toBe(4);
    });
});
