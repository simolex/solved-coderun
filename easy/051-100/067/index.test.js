const solution = require(".");

describe("67. Symmetric sequence", () => {
    test("test-1", () => {
        const result = solution(9, [1, 2, 3, 4, 5, 4, 3, 2, 1]);
        expect(result).toEqual([]);
    });
    test("test-2", () => {
        const result = solution(5, [1, 2, 1, 2, 2]);
        expect(result).toEqual([1, 2, 1]);
    });
    test("test-3", () => {
        const result = solution(5, [1, 2, 3, 4, 5]);
        expect(result).toEqual([4, 3, 2, 1]);
    });
});
