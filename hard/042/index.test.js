const solution = require(".");

describe("42. Кружки в Маховниках", () => {
    test("test-1", () => {
        const result = solution(6, [[1, 2], [0], [1, 2], [3, 1, 2, 5], [1, 2], [4, 1, 3, 4, 5]]);
        expect(result).toEqual([2, 1, 3, 5, 4, 6]);
    });
});
