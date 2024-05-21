const solution = require(".");

describe("41. Десант", () => {
    test("test-1", () => {
        const result = solution(4, 4, [
            [1, 2, 4, 1],
            [2, 4, 4, 4],
            [1, 4, 3, 2],
            [1, 2, 3, 2],
        ]);
        expect(result).toBe(4);
    });

    test("test-2", () => {
        const result = solution(5, 3, [
            [6, 4, 4],
            [6, 4, 6],
            [6, 4, 6],
            [6, 4, 6],
            [5, 5, 5],
        ]);
        expect(result).toBe(1);
    });

    test("test-5", () => {
        const result = solution(8, 7, [
            [1, 4, 2, 2, 2, 4, 6],
            [6, 2, 4, 4, 2, 4, 6],
            [2, 1, 2, 4, 2, 4, 6],
            [2, 1, 1, 2, 4, 6, 6],
            [6, 2, 1, 2, 6, 1, 6],
            [5, 5, 5, 5, 5, 5, 5],
            [2, 1, 2, 1, 2, 1, 2],
            [5, 5, 5, 5, 1, 5, 5],
        ]);
        expect(result).toBe(8);
    });
});
