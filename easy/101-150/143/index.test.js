const solution = require(".");

describe("143. Сортировка вагонов lite", () => {
    test("test-1", () => {
        const result = solution([3, 2, 1]);
        expect(result).toBe(true);
    });
    test("test-2", () => {
        const result = solution([4, 1, 3, 2]);
        expect(result).toBe(true);
    });
    test("test-3", () => {
        const result = solution([2, 3, 1]);
        expect(result).toBe(false);
    });
});
