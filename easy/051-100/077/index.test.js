const solution = require(".");

describe("77. Improving academic performance", () => {
    test("test-1", () => {
        const result = solution(2n, 0n, 0n);
        expect(result).toBe(2n);
    });
    test("test-2", () => {
        const result = solution(1000000000000000n, 10000000000000000n, 0n);
        expect(result).toBe(4333333333333334n);
    });
});
