const solution = require(".");

describe("79. Уравнение с корнем", () => {
    test("test-1", () => {
        const result = solution(1, 0, 0);
        expect(result).toBe(0);
    });
    test("test-2", () => {
        const result = solution(1, 2, 3);
        expect(result).toBe(7);
    });
    test("test-3", () => {
        const result = solution(1, 2, -3);
        expect(result).toBe("NO SOLUTION");
    });
    test("test-8", () => {
        const result = solution(10, 3, 4);
        expect(result).toBe("NO SOLUTION");
    });
});
