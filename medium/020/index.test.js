const solution = require(".");

describe("20. Гистограмма и прямоугольник", () => {
    test("test-1", () => {
        const result = solution([7, 2, 1, 4, 5, 1, 3, 3]);
        expect(result).toBe(8);
    });
});
