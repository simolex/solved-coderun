const getTransferCount = require(".");

describe("58. OpenCalculator", () => {
    test("test", () => {
        const result = getTransferCount(
            5,
            [
                [4, 1, 2, 3, 4],
                [2, 5, 3]
            ],
            [1, 3]
        );
        expect(result).toBe(0);
    });
});
