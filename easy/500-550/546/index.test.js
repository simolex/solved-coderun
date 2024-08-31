const solution = require(".");

describe("546. Покрытие K отрезками", () => {
    test("test-1", () => {
        const result = solution(6, 2, [1, 2, 3, 9, 8, 7]);
        expect(result).toBe(2);
    });
});
