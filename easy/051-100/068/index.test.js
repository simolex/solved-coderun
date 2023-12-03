const solution = require(".");

describe("68. Cup cowcake throwing", () => {
    test("test-1", () => {
        const result = solution(7, [10, 20, 15, 10, 30, 5, 1]);
        expect(result).toBe(6);
    });
    test("test-2", () => {
        const result = solution(3, [15, 15, 10]);
        expect(result).toBe(1);
    });
    test("test-3", () => {
        const result = solution(3, [10, 15, 20]);
        expect(result).toBe(0);
    });
});
