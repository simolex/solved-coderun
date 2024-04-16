const solution = require(".");
//number-of-triangles

describe("29. Количество треугольников", () => {
    test("test-1", () => {
        const result = solution(1);
        expect(result).toBe(1);
    });
    test("test-2", () => {
        const result = solution(2);
        expect(result).toBe(5);
    });
    test("test-3", () => {
        const result = solution(4);
        expect(result).toBe(27);
    });
});
