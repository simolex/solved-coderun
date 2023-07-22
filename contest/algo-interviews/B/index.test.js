const getCardCount = require("./code.js");

describe("B. Card counter", () => {
    test("test-1", () => {
        const result = getCardCount(7, 3, [5, 8, 2, 1, 3, 4, 11]);
        expect(result).toBe(24);
    });
    test("test-2", () => {
        const result = getCardCount(5, 5, [1, 2, 3, 4, 5]);
        expect(result).toBe(15);
    });
    test("test-3", () => {
        const result = getCardCount(7, 4, [1, 1, 9, 2, 2, 2, 6]);
        expect(result).toBe(17);
    });
});
