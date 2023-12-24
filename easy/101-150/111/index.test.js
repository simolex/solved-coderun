const solution = require(".");

describe("111. Points and segments", () => {
    test("test-1", () => {
        const result = solution(
            3,
            2,
            [
                [0, 5],
                [-3, 2],
                [7, 10]
            ],
            [1, 6]
        );
        expect(result).toEqual([2, 0]);
    });
});
