const solution = require(".");

describe("69. More your neighbors", () => {
    test("test-1", () => {
        const result = solution([1, 2, 3, 4, 5]);
        expect(result).toBe(0);
    });
    test("test-2", () => {
        const result = solution([5, 4, 3, 2, 1]);
        expect(result).toBe(0);
    });
    test("test-3", () => {
        const result = solution([1, 5, 1, 5, 1]);
        expect(result).toBe(2);
    });
});
