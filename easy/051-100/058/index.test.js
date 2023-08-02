const getButtonCount = require(".");

describe("58. OpenCalculator", () => {
    test("test-1", () => {
        const result = getButtonCount(["1", "2", "3"], "1123");
        expect(result).toBe(0);
    });
    test("test-2", () => {
        const result = getButtonCount(["5", "7", "3"], "123");
        expect(result).toBe(2);
    });
    test("test-3", () => {
        const result = getButtonCount(["1", "2", "3"], "1001");
        expect(result).toBe(1);
    });
});
