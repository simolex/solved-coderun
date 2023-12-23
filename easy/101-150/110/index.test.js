const solution = require(".");

describe("110. Observation students", () => {
    test("test-1", () => {
        const result = solution(10, 3, [
            [1, 3],
            [2, 4],
            [9, 9]
        ]);
        expect(result).toBe(5);
    });
    test("test-2", () => {
        const result = solution(10, 2, [
            [1, 1],
            [1, 2]
        ]);
        expect(result).toBe(8);
    });
});
