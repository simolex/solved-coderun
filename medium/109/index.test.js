const solution = require(".");
const slowSolution = require("./index.slow");

describe("109. Median union v2", () => {
    test("test-1", () => {
        const result = solution(3, 6, [
            [1, 3, 1, 0, 5],
            [0, 2, 1, 1, 100],
            [1, 6, 8, 5, 11],
        ]);
        expect(result).toEqual([7, 10, 9]);
    });
    test("test-1", () => {
        const result = solution(4, 20, [
            [-1128, 259, 350, 243, 397],
            [-1492, 78, 167, 276, 277],
            [67, 38, 72, 56, 107],
            [-1434, 77, 175, 215, 271],
        ]);
        expect(result).toEqual([272, 572, 278, 272, -376, 278]);
    });
    const testData_5 = [
        [3, 5, 0, 3, 6],
        [1, 0, 0, 1, 2],
        [4, 1, 1, 1, 5],
        [1, 3, 6, 6, 9],
        [6, 3, 7, 0, 8],
        [7, 0, 3, 2, 6],
        [3, 2, 4, 5, 9],
        [9, 0, 1, 1, 3],
        [9, 0, 0, 0, 1],
        [3, 5, 5, 4, 8],
        [3, 5, 5, 4, 8],
        [9, 0, 0, 0, 1],
        [9, 0, 1, 1, 3],
        [3, 2, 4, 5, 9],
        [7, 0, 3, 2, 6],
        [6, 3, 7, 0, 8],
        [1, 3, 6, 6, 9],
        [4, 1, 1, 1, 5],
        [1, 0, 0, 1, 2],
        [3, 5, 0, 3, 6],
    ];
    test("test-5", () => {
        const result = solution(20, 2, testData_5);
        const slowResult = slowSolution(20, 2, testData_5);

        expect(result).toEqual(slowResult);
    });
});
