const solution = require(".");

describe("542. Нужно больше конфет!", () => {
    test("test-1", () => {
        const result = solution([5, 1, 2, 7]);
        expect(result).toBe(3);
    });
    test("test-2", () => {
        const result = solution([1, 1, 1]);
        expect(result).toBe(0);
    });
    test("test-3", () => {
        const result = solution([0]);
        expect(result).toBe(0);
    });
});
