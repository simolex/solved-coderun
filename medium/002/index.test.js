const solution = require(".");

describe("2. Самый дешевый путь", () => {
    test("test-1", () => {
        const result = solution(5, 5, [
            [1, 1, 1, 1, 1],
            [3, 100, 100, 100, 100],
            [1, 1, 1, 1, 1],
            [2, 2, 2, 2, 1],
            [1, 1, 1, 1, 1]
        ]);
        expect(result).toBe(11);
    });
    test("test-1", () => {
        const result = solution(5, 5, [
            [1, 1, 1, 1, 1],
            [100, 100, 100, 100, 1],
            [1, 1, 1, 1, 1],
            [1, 100, 100, 100, 100],
            [1, 1, 1, 1, 1]
        ]);
        expect(result).toBe(108);
    });
});
