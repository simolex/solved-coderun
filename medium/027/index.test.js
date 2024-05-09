const solution = require(".");

describe("27. Разложение в сумму кубов", () => {
    test("test-1", () => {
        const result = solution(9);
        expect(result).toBe(2);
    });
    test("test-2", () => {
        const result = solution(701061);
        expect(result).toBe(5);
    });
});
