const solution = require(".");

describe("135. Операционные системы lite", () => {
    test("test-1", () => {
        const result = solution(10, [
            [1, 3],
            [4, 7],
            [3, 4]
        ]);
        expect(result).toBe(1);
    });
    test("test-2", () => {
        const result = solution(10, [
            [1, 3],
            [4, 5],
            [7, 8],
            [4, 6]
        ]);
        expect(result).toBe(3);
    });
});
