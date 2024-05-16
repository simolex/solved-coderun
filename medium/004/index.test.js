const solution = require(".");

describe("4. Ход конём", () => {
    test("test-1", () => {
        const result = solution(3, 2);
        expect(result).toBe(1);
    });
    test("test-2", () => {
        const result = solution(31, 34);
        expect(result).toBe(293930);
    });
});
