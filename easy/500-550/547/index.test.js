const solution = require(".");

describe("547. Одномерный почтальон", () => {
    test("test-1", () => {
        const result = solution(6, 2, [1, 2, 3, 9, 8, 7]);
        expect(result).toBe(2);
    });
});
