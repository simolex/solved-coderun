const solution = require(".");

describe("64. sapper", () => {
    test("test-1", () => {
        const result = solution(3, 2, 2, [
            [1, 1],
            [2, 2]
        ]);
        expect(result).toEqual([
            ["*", 2],
            [2, "*"],
            [1, 1]
        ]);
    });
    test("test-2", () => {
        const result = solution(2, 2, 0, []);
        expect(result).toEqual([
            [0, 0],
            [0, 0]
        ]);
    });
    test("test-3", () => {
        const result = solution(4, 4, 4, [
            [1, 3],
            [2, 1],
            [4, 2],
            [4, 4]
        ]);
        expect(result).toEqual([
            [1, 2, "*", 1],
            ["*", 2, 1, 1],
            [2, 2, 2, 1],
            [1, "*", 2, "*"]
        ]);
    });
});
