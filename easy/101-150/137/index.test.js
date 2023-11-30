const solution = require(".");

describe("137. Minimum rectangle", () => {
    test("test-1", () => {
        const result = solution(3, [
            [1, 1],
            [1, 10],
            [5, 5]
        ]);
        expect(result).toEqual([1, 1, 5, 10]);
    });
});
