const solution = require(".");

describe("112. Seating arrangements", () => {
    test("test-1", () => {
        const result = solution(4, 1, [11, 1, 12, 2]);
        expect(result).toEqual([2, [1, 1, 2, 2]]);
    });
    test("test-2", () => {
        const result = solution(4, 0, [11, 1, 12, 2]);
        expect(result).toEqual([1, [1, 1, 1, 1]]);
    });
});
