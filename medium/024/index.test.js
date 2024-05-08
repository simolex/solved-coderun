const solution = require(".");

describe("24. Тупики", () => {
    test("test-1", () => {
        const result = solution(1, [[2, 5]]);
        expect(result).toEqual([1]);
    });
    test("test-2", () => {
        const result = solution(1, [
            [2, 5],
            [5, 6]
        ]);
        expect(result).toEqual([0, 2]);
    });
    test("test-3", () => {
        const result = solution(2, [
            [1, 3],
            [2, 6],
            [4, 5]
        ]);
        expect(result).toEqual([1, 2, 1]);
    });
});
