const testFn = require(".");

describe("gen AT-TA", () => {
    test("test 7", () => {
        const result = testFn("7");
        expect(result).toBe(true);
    });
    test("test 77", () => {
        const result = testFn("77");
        expect(result).toBe(true);
    });
    test("test 71", () => {
        const result = testFn("71");
        expect(result).toBe(false);
    });
    test("test 4", () => {
        const result = testFn("71117771111771177111111");
        expect(result).toBe(false);
    });
    test("test 5", () => {
        const result = testFn("7117771111771177111111");
        expect(result).toBe(true);
    });
    test("test 6", () => {
        const result = testFn("");
        expect(result).toBe(false);
    });
    test("test 7", () => {
        const result = testFn("000");
        expect(result).toBe(false);
    });
    test("test 6", () => {
        const result = testFn("111");
        expect(result).toBe(false);
    });
    test("test 6", () => {
        const result = testFn("1111");
        expect(result).toBe(true);
    });
    test("test 6", () => {
        const result = testFn("711");
        expect(result).toBe(true);
    });
});
