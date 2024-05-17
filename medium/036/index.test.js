const solution = require(".");

describe("36. Распил брусьев", () => {
    test("test-1", () => {
        const result = solution(10, [2, 4, 7]);
        expect(result).toBe(20);
    });
    test("test-2", () => {
        const result = solution(100, [15, 50, 75]);
        expect(result).toBe(200);
    });
});
