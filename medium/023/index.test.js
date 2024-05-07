const solution = require(".");

describe("23. Гоблины и шаманы", () => {
    test("test-1", () => {
        const result = solution(["+ 1", "+ 2", "-", "+ 3", "+ 4", "-", "-"]);
        expect(result).toEqual([1, 2, 3]);
    });
});
