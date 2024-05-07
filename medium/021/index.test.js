const solution = require(".");

describe("21. Поврежденный XML", () => {
    test("test-1", () => {
        const result = solution("<a></b>");
        expect(result).toBe("<b></b>");
    });
    test("test-2", () => {
        const result = solution("<a><aa>");
        expect(result).toBe("<a></a>");
    });
    test("test-3", () => {
        const result = solution("<a><>a>");
        expect(result).toBe("<a></a>");
    });
    test("test-4", () => {
        const result = solution("<a/</a>");
        expect(result).toBe("<a></a>");
    });
});
