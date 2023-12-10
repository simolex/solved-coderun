const solution = require(".");

describe("94. Beauty above all", () => {
    test("test-1", () => {
        const result = solution(5, 3, [1, 2, 1, 3, 2]);

        expect(result).toEqual([2, 4]);
    });
    test("test-2", () => {
        const result = solution(6, 4, [2, 4, 2, 3, 3, 1]);
        expect(result).toEqual([2, 6]);
    });
});
