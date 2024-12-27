const solution = require(".");

describe("5202. Юля, Никита и задачи", () => {
    test("test-1", () => {
        const result = solution(1, 1);
        expect(result).toBe(2);
    });
    test("test-2", () => {
        const result = solution(4, 1);
        expect(result).toBe(5);
    });
    test("test-3", () => {
        const result = solution(1, 3);
        expect(result).toBe(4);
    });
});
