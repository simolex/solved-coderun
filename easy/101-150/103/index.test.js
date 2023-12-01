const solution = require(".");

describe("103. Arrangement laptops", () => {
    test("test-1", () => {
        const result = solution(10, 2, 2, 10);
        expect(result.sort((a, b) => a[0] - b[0] - (a[1] - b[1]))).toEqual(
            [
                [20, 2],
                [2, 20],
                [4, 10],
                [10, 4]
            ].sort((a, b) => a[0] - b[0] - (a[1] - b[1]))
        );
    });
    test("test-2", () => {
        const result = solution(5, 7, 3, 2);
        expect(result.sort((a, b) => a[0] - b[0] - (a[1] - b[1]))).toEqual(
            [
                [9, 5],
                [5, 9]
            ].sort((a, b) => a[0] - b[0] - (a[1] - b[1]))
        );
    });
});
