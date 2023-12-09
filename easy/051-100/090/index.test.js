const solution = require(".");

describe("90. Stylish clothes", () => {
    test("test-1", () => {
        const result = solution(2, [3, 4], 3, [1, 2, 3]);
        expect(result).toEqual([3, 3]);
    });
    test("test-2", () => {
        const result = solution(2, [4, 5], 3, [1, 2, 3]);
        expect(result).toEqual([4, 3]);
    });
    test("test-3", () => {
        const result = solution(5, [1, 2, 3, 4, 5], 5, [1, 2, 3, 4, 5]);
        expect(result).toEqual([1, 1]);
    });
});
