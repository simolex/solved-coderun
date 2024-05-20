const solution = require(".");

describe("40. Радио Байтик", () => {
    test("test-1", () => {
        const result = solution([
            [0, 0],
            [0, 1],
            [1, 0],
            [1, 1],
        ]);
        expect(result[0]).toBeCloseTo(0.707106781, 8);
        expect(result[1]).toEqual([1, 2, 2, 1]);
    });
    test("test-2", () => {
        const result = solution([
            [0, 0],
            [0, 1],
            [0, 2],
        ]);
        expect(result[0]).toBeCloseTo(1, 8);
        expect(result[1]).toEqual([1, 2, 1]);
    });

    test("test-13", () => {
        const result = solution([
            [-10000, 10000],
            [-10000, -10000],
            [10000, 10000],
            [10000, -10000],
        ]);
        expect(result[0]).toBeCloseTo(14142.13562373095, 8);
        expect(result[1]).toEqual([1, 2, 2, 1]);
    });
});
