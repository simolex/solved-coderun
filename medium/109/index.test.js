const solution = require(".");

describe("109. Median union v2", () => {
    test("test-1", () => {
        const result = solution(3, 6, [
            [1, 3, 1, 0, 5],
            [0, 2, 1, 1, 100],
            [1, 6, 8, 5, 11],
        ]);
        expect(result).toEqual([7, 10, 9]);
    });
});
