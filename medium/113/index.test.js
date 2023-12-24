const solution = require(".");

describe("113. Advertising", () => {
    test("test-1", () => {
        const result = solution(4, [
            [1, 11],
            [1, 3],
            [6, 15],
            [1, 6]
        ]);
        expect(result).toEqual([3, 1, 6]);
    });
    test("test-2", () => {
        const result = solution(1, [1, 10]);
        expect(result).toEqual([2, 1, 22]);
    });
    test("test-3", () => {
        const result = solution(3, [
            [1, 10],
            [11, 20],
            [21, 30]
        ]);
        expect(result).toEqual([2, 1, 22]);
    });
});
