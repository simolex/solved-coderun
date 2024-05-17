const solution = require(".");

describe("8. Компоненты связности", () => {
    test("test-1", () => {
        const result = solution(6, 4, [
            [3, 1],
            [1, 2],
            [5, 4],
            [2, 3]
        ]);
        expect(result).toEqual([[1, 2, 3], [4, 5], [6]]);
    });
    test("test-2", () => {
        const result = solution(6, 4, [
            [4, 2],
            [1, 4],
            [6, 4],
            [3, 6]
        ]);
        expect(result).toEqual([[1, 2, 3, 4, 6], [5]]);
    });
});
