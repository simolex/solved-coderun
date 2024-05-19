const solution = require(".");

describe("11. Поиск цикла", () => {
    test("test-1", () => {
        const result = solution(3, [
            [0, 1, 1],
            [1, 0, 1],
            [1, 1, 0]
        ]);
        expect(result).toEqual([3, 2, 1]);
    });
    test("test-2", () => {
        const result = solution(4, [
            [0, 0, 1, 0],
            [0, 0, 0, 1],
            [1, 0, 0, 0],
            [0, 1, 0, 0]
        ]);
        expect(result).toEqual([]);
    });
    test("test-3", () => {
        const result = solution(5, [
            [0, 1, 0, 0, 0],
            [1, 0, 0, 0, 0],
            [0, 0, 0, 1, 1],
            [0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0]
        ]);
        expect(result).toEqual([5, 4, 3]);
    });
});
