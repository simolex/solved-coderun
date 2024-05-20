const solution = require(".");

describe("41. Десант", () => {
    test("test-1", () => {
        const result = solution(4, 4, [
            [1, 2, 4, 1],
            [2, 4, 4, 4],
            [1, 4, 3, 2],
            [1, 2, 3, 2],
        ]);
        expect(result).toBe(4);
    });
});
