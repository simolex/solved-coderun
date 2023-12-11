const solution = require(".");

describe("95. Score hypercheckers", () => {
    test("test-1", () => {
        const result = solution(5, 2, [1, 1, 2, 2, 3]);

        expect(result).toBe(9);
    });
});
