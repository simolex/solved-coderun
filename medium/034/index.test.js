const solution = require(".");

describe("34. Космический мусорщик", () => {
    test("test-1", () => {
        const result = solution(
            { N: "N", S: "NUSDDUSE", W: "UEWWD", E: "", U: "U", D: "WED" },
            "S",
            3
        );
        expect(result).toBe(34);
    });
});
