const solution = require(".");

describe("96. Substring", () => {
    test("test-1", () => {
        const result = solution(3, 1, "abb");
        expect(result).toEqual([2, 1]);
    });
    test("test-2", () => {
        const result = solution(5, 2, "ababa");
        expect(result).toEqual([4, 1]);
    });
});
