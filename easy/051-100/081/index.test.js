const solution = require(".");

describe("81. triangle", () => {
    test("test-1", () => {
        const result = solution(3, 4, 5);
        expect(result).toBe("YES");
    });
    test("test-2", () => {
        const result = solution(4, 5, 3);
        expect(result).toBe("YES");
    });
    test("test-3", () => {
        const result = solution(3, 2, 5);
        expect(result).toBe("NO");
    });
});
