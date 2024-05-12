const solution = require(".");

describe("37. Покупка билетов", () => {
    test("test-1", () => {
        const result = solution(5, [
            [5, 10, 15],
            [2, 10, 15],
            [5, 5, 5],
            [20, 20, 1],
            [20, 1, 1]
        ]);
        expect(result).toBe(12);
    });
});
