const solution = require(".");

describe("131. Красивая строка", () => {
    test("test-1", () => {
        const result = solution(2, "abcaz");
        expect(result).toBe(4);
    });
    test("test-2", () => {
        const result = solution(2, "helto");
        expect(result).toBe(3);
    });
});
