const solution = require(".");

describe("75. Metro", () => {
    test("test-1", () => {
        const result = solution(1, 3, 3, 2);
        expect(result).toEqual([5, 7]);
    });
    test("test-2", () => {
        const result = solution(1, 5, 1, 2);
        expect(result).toEqual([]);
    });
});
