const solution = require(".");

describe("5205. Ещё одна задача на теорию чисел", () => {
    test("test-1", () => {
        const result = solution(20, 8);
        expect(result).toEqual([4, 40]);
    });
    test("test-2", () => {
        const result = solution(2, 3);
        expect(result).toEqual([1, 6]);
    });
    test("test-3", () => {
        const result = solution(5, 15);
        expect(result).toEqual([5, 15]);
    });
});
