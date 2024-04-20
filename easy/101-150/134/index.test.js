const solution = require(".");

describe("134. Хорошая строка", () => {
    test("test-1", () => {
        const result = solution([1, 1, 1]);
        expect(result).toBe(2);
    });
    test("test-2", () => {
        const result = solution([3, 4]);
        expect(result).toBe(3);
    });
});
