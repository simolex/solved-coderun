const solution = require(".");

describe("38. Площадь комнаты", () => {
    test("test-1", () => {
        const result = solution(3, 2, (2)[("***", "*.*", "***")]);
        expect(result).toBe(1);
    });
});
