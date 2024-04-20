const solution = require(".");
//number-of-triangles

describe("133. Контрольная работа", () => {
    test("test-1", () => {
        const result = solution(25, 2, 1, 2);
        expect(result).toEqual([2, 2]);
    });
    test("test-2", () => {
        const result = solution(25, 13, 7, 1);
        expect(result).toEqual([]);
    });
});
