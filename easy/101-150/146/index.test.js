const solution = require(".");

describe("146. Игра в пьяницу", () => {
    test("test-1", () => {
        const result = solution([1, 3, 5, 7, 9], [2, 4, 6, 8, 0]);
        expect(result).toEqual([2, 5]);
    });
    test("test-2", () => {
        const result = solution([2, 4, 6, 8, 0], [1, 3, 5, 7, 9]);
        expect(result).toEqual([1, 5]);
    });
    test("test-3", () => {
        const result = solution([1, 7, 3, 9, 4], [5, 8, 0, 2, 6]);
        expect(result).toEqual([2, 23]);
    });
});
