const solution = require(".");

describe("19. Значение логического выражения", () => {
    test("test-1", () => {
        const result = solution("1|(0&0^1)");
        expect(result).toBe(1);
    });
    test("test-2", () => {
        const result = solution("!1");
        expect(result).toBe(0);
    });

    test("test-4", () => {
        const result = solution("!1|(((!((((((!(((0)^1)|0&1)^0)&1|1))))))))");
        expect(result).toBe(0);
    });
});
