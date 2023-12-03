const solution = require(".");

describe("63. Maxim triangle", () => {
    test("test-1", () => {
        const result = solution(3, [[440], [220, "closer"], [300, "further"]]);
        expect(result).toEqual([30, 260]);
    });
    test("test-2", () => {
        const result = solution(4, [[554], [880, "further"], [440, "closer"], [622, "closer"]]);
        expect(result).toEqual([531, 660]);
    });
});
