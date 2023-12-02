const solution = require(".");

describe("76. Details", () => {
    test("test-1", () => {
        const result = solution(10, 5, 2);
        expect(result).toBe(4);
    });
    test("test-2", () => {
        const result = solution(13, 5, 3);
        expect(result).toBe(3);
    });
    test("test-3", () => {
        const result = solution(14, 5, 3);
        expect(result).toBe(4);
    });
    test("test-4", () => {
        const result = solution(30, 5, 7);
        expect(result).toBe(0);
    });
});
