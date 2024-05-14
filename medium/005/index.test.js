const solution = require(".");

describe("5. Кафе", () => {
    test("test-1", () => {
        const result = solution(5, [35, 40, 101, 59, 63]);
        expect(result).toEqual([235, [0, 1], [5]]);
    });
});
