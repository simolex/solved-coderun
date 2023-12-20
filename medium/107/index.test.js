const solution = require(".");

describe("107. Cleaning day", () => {
    test("test-1", () => {
        const result = solution(8, 2, 3, [170, 205, 225, 190, 260, 130, 225, 160]);
        expect(result).toBe(20);
    });
});
