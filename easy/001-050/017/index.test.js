const solution = require(".");

describe("17. Конвейер", () => {
    test("test-1", () => {
        const result = solution([
            [2.9, 2.1],
            [5.6, 9.0, 2.0]
        ]);
        expect(result).toEqual([1, 0]);
    });
});
