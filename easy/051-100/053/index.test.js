const solution = require(".");

describe("53. Run Manhattan", () => {
    test("test-1", () => {
        const result = solution(2, 1, 5, [
            [0, 1],
            [-2, 1],
            [-2, 3],
            [0, 3],
            [2, 5],
        ]);
        expect(result).toEqual([
            [1, 5],
            [2, 4],
        ]);
    });
    test("test-2", () => {
        const result = solution(1, 1, 1, [[0, 0]]);
        expect(result).toEqual([
            [-1, 0],
            [0, -1],
            [0, 0],
            [0, 1],
            [1, 0],
        ]);
    });
    test("test-3", () => {
        const result = solution(1, 10, 1, [[0, 0]]);
        expect(result).toEqual([
            [-1, 0],
            [0, -1],
            [0, 0],
            [0, 1],
            [1, 0],
        ]);
    });
});
