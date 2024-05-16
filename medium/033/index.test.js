const solution = require(".");

describe("33. Расстояние по Левенштейну", () => {
    test("test-1", () => {
        const result = solution("ABCDEFGH", "ACDEXGIH");
        expect(result).toBe(3);
    });
    test("test-6", () => {
        const result = solution("SALJSDHLAKHSDDSHJLASDHJLASDHJLD", "ALJSDHLAKHSDDSHJLASDHJLASDHJLD");
        expect(result).toBe(1);
    });
});
