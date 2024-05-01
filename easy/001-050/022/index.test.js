const solution = require(".");

describe("22. Минимум на отрезке", () => {
    test("test-1", () => {
        const result = solution(3, [1, 3, 2, 4, 5, 3, 1]);
        expect(result).toEqual([1, 2, 2, 3, 1]);
    });
});
