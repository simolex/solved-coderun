const solution = require(".");

describe("139. Скучная лекция", () => {
    test("test-1", () => {
        const result = solution("hello");
        expect(result).toEqual({ e: 8, h: 5, l: 17, o: 5 });
    });
    test("test-2", () => {
        const result = solution("abacaba");
        expect(result).toEqual({ a: 44, b: 24, c: 16 });
    });
});
