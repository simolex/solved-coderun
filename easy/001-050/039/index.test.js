const solution = require(".");

describe("39. Откуда достижима первая вершина", () => {
    test("test-1", () => {
        const result = solution(4, 5, [
            [2, 2],
            [4, 3],
            [2, 3],
            [3, 1],
            [2, 4]
        ]);
        expect(result).toEqual([1, 2, 3, 4]);
    });
    test("test-4", () => {
        const result = solution(10, 0);
        expect(result).toEqual([1]);
    });
});
