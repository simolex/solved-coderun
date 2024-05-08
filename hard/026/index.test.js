const solution = require(".");

describe("26. Машинки", () => {
    test("test-1", () => {
        const result = solution(3, 2, [1, 2, 3, 1, 3, 1, 2]);
        expect(result).toBe(4);
    });
});
