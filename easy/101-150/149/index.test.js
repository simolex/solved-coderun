const solution = require(".");

describe("149. Пирамидальная сортировка", () => {
    test("test-1", () => {
        const result = solution(1, [1]);
        expect(result).toEqual([1]);
    });
    test("test-2", () => {
        const result = solution(2, [3, 1]);
        expect(result).toEqual([1, 3]);
    });
});
