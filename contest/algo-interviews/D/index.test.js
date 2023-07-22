const getNumberOfGoodPairs = require("./code.js");

describe("B. Card counter", () => {
    test("test-1", () => {
        const result = getNumberOfGoodPairs(5, [203, 404, 204, 200, 403]);
        expect(result).toBe(2);
    });
    test("test-2", () => {
        const result = getNumberOfGoodPairs(1, [1000000]);
        expect(result).toBe(0);
    });
    test("test-3", () => {
        const result = getNumberOfGoodPairs(3, [2022, 2020, 2021]);
        expect(result).toBe(0);
    });
});
