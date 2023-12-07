const solution = require(".");

describe("66. Largest product two numbers", () => {
    test("test-1", () => {
        const result = solution([3, 5, 1, 7, 9, 0, 9, -3, 10]);
        expect(result).toEqual([10, 9, 9]);
    });
    test("test-2", () => {
        const result = solution([-5, -30000, -12]);
        expect(result).toEqual([-5, -12, -30000]);
    });
    test("test-3", () => {
        const result = solution([1, 2, 3]);
        expect(result).toEqual([3, 2, 1]);
    });
});
