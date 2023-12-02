const solution = require(".");

describe("70. Nearest number", () => {
    test("test-1", () => {
        const result = solution(5, [1, 2, 3, 4, 5], 6);
        expect(result).toBe(5);
    });
    test("test-2", () => {
        const result = solution(5, [5, 4, 3, 2, 1], 3);
        expect(result).toBe(3);
    });
});
