const solution = require(".");

describe("73. Система линейных уравнений - 2", () => {
    test("test-1", () => {
        const result = solution(1, 0, 0, 1, 3, 3);
        expect(result).toEqual([2, 3, 3]);
    });
    test("test-2", () => {
        const result = solution(1, 1, 2, 2, 1, 2);
        expect(result).toEqual([1, -1, 1]);
    });
    test("test-3", () => {
        const result = solution(0, 2, 0, 4, 1, 2);
        expect(result).toEqual([4, 0.5]);
    });
    test("test-9", () => {
        const result = solution(0, 0, 0, 0, 0, 1);
        expect(result).toEqual([0]);
    });
    test("test-32", () => {
        const result = solution(0, 0, 1, 2, 0, 3);
        expect(result).toEqual([1, -0.5, 1.5]);
    });
    test("test-001", () => {
        const result = solution(2, 4, 8, 1, 2, 5);
        expect(result).toEqual([2, 0.6, 0.2]);
    });
    test("test-002", () => {
        const result = solution(2, 4, 8, 1, 2, 4);
        expect(result).toEqual([2, 0.4666666666666667, 0.26666666666666666]);
    });
});
