const solution = require(".");

describe("104. Very easy problem", () => {
    test("test-1", () => {
        const result = solution(4, 1, 1);
        expect(result).toBe(3);
    });
    test("test-2", () => {
        const result = solution(5, 1, 2);
        expect(result).toBe(4);
    });
});
