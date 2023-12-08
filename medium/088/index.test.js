const solution = require(".");

describe("87. Maya script", () => {
    test("test-1", () => {
        const result = solution(4, 11, "cAda", "AbrAcadAbRa");
        expect(result).toBe(2);
    });
});
