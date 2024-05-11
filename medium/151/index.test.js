const solution = require(".");

describe("151. Кузнечик", () => {
    test("test-1", () => {
        const result = solution(8, 2);
        expect(result).toBe(21);
    });
});
