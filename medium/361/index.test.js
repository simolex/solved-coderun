const solution = require(".");

describe("361. Гвоздики", () => {
    test("test-1", () => {
        const result = solution([3, 13, 12, 4, 14, 6]);
        expect(result).toBe(5);
    });
    test("test-2", () => {
        const result = solution([682, 2517, 2478, 2816, 4980, 5839, 6414, 7667, 8802, 8995]);
        expect(result).toBe(4400);
    });
});
