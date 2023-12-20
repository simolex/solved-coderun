const solution = require(".");

describe("101. Diplomas", () => {
    test("test-1", () => {
        const result = solution(2, 3, 10);
        expect(result).toBe(9);
    });
    test("test-6", () => {
        const result = solution(1000000000, 1000000000, 1000000000);
        expect(result).toBe(31623000000000);
    });
});
