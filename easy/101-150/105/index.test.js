const solution = require(".");

describe("105. Square", () => {
    test("test-1", () => {
        const result = solution(6n, 7n, 38n);
        expect(result).toBe(2n);
    });
    test("test-1", () => {
        const result = solution(1000000000n, 1000000000n, 3999999998n);
        expect(result).toBe(1n);
    });
});
