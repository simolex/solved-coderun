const resolve = require(".");

describe("74. Castle If", () => {
    test("test-1", () => {
        const result = resolve(1, 1, 1, 1, 1);
        expect(result).toEqual("YES");
    });
    test("test-2", () => {
        const result = resolve(2, 2, 2, 1, 1);
        expect(result).toEqual("NO");
    });
    test("test-3", () => {
        const result = resolve(3, 2, 1, 2, 1);
        expect(result).toEqual("YES");
    });
});
