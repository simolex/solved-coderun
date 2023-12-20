const solution = require(".");

describe("102. Space settlement", () => {
    test("test-1", () => {
        const result = solution(1n, 1n, 1n, 1n, 1n);
        expect(result).toBe(0n);
    });
    test("test-2", () => {
        const result = solution(1n, 1n, 1n, 3n, 3n);
        expect(result).toBe(1n);
    });
    test("test-3", () => {
        const result = solution(19n, 2n, 7n, 253n, 211n);
        expect(result).toBe(22n);
    });
});
