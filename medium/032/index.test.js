const solution = require(".");

describe("Ход конём v2", () => {
    test("test-1", () => {
        const result = solution(8, 1, 1);
        expect(result).toBe(3);
    });
    test("test-2", () => {
        const result = solution(10, 5, 0);
        expect(result).toBe(5);
    });
    test("test-4", () => {
        const result = solution(7, 0, 2);
        expect(result).toBe(2);
    });
});
