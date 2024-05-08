const solution = require(".");

describe("25. Коммерческий калькулятор", () => {
    test("test-1", () => {
        const result = solution([10, 11, 12, 13]);
        expect(result).toBe(4.6);
    });
    test("test-2", () => {
        const result = solution([1, 1]);
        expect(result).toBe(0.1);
    });
});
