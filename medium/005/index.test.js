const solution = require(".");

describe("5. Кафе", () => {
    test("test-1", () => {
        const result = solution(5, [35, 40, 101, 59, 63]);
        expect(result).toEqual([235, [0, 1], [5]]);
    });
    test("test-4", () => {
        const result = solution(8, [56, 113, 67, 86, 94, 105, 87, 102]);
        expect(result).toEqual([514, [0, 2], [5, 8]]);
    });
    test("test-5", () => {
        const result = solution(1, [300]);
        expect(result).toEqual([300, [1, 0], []]);
    });
    test("test-8", () => {
        const result = solution(11, [0, 0, 0, 50, 0, 20, 0, 150, 0, 0, 0]);
        expect(result).toEqual([220, [1, 0], []]);
    });
});
