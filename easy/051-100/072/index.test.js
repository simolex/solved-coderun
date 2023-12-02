const solution = require(".");

describe("72. List growing", () => {
    test("test-1", () => {
        const result = solution([1, 7, 9]);
        expect(result).toEqual("YES");
    });
    test("test-2", () => {
        const result = solution([1, 9, 7]);
        expect(result).toEqual("NO");
    });
    test("test-3", () => {
        const result = solution([2, 2, 2]);
        expect(result).toEqual("NO");
    });
});
