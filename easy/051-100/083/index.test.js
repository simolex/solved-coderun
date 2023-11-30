const resolve = require(".");

describe("83. Keyboard", () => {
    test("test-1", () => {
        const result = resolve(
            5,
            [1, 50, 3, 4, 3],
            16,
            [1, 2, 3, 4, 5, 1, 3, 3, 4, 5, 5, 5, 5, 5, 4, 5]
        );
        expect(result).toEqual(["YES", "NO", "NO", "NO", "YES"]);
    });
});
