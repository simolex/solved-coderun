const solution = require(".");

describe("106. Wires", () => {
    test("test-1", () => {
        const result = solution(4, 11, [802, 743, 457, 539]);
        expect(result).toBe(200);
    });
});
