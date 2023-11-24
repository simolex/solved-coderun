const solution = require("./index-min");

describe("62. Number different numbers", () => {
    test("test-1", () => {
        const result = solution(2, [[0, 10000], [1]]);
        expect(result).toEqual([10000]);
    });
    test("test-2", () => {
        const result = solution(14, [
            [0, 1],
            [0, 345],
            [1],
            [0, 4346],
            [1],
            [0, 2435],
            [1],
            [0, 235],
            [0, 5],
            [0, 365],
            [1],
            [1],
            [1],
            [1]
        ]);
        expect(result).toEqual([1, 345, 2435, 5, 235, 365, 4346]);
    });
});
