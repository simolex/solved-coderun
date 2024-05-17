const solution = require(".");

describe("7. Поиск в глубину", () => {
    test("test-1", () => {
        const result = solution(4, 5, [
            [2, 2],
            [3, 4],
            [2, 3],
            [1, 3],
            [2, 4]
        ]);
        expect(result).toEqual([1, 2, 3, 4]);
    });
});
