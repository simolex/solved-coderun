const solution = require(".");

describe("6. НОП с восстановлением ответа", () => {
    test("test-1", () => {
        const result = solution([1, 2, 3], [2, 3, 1]);
        expect(result).toEqual([2, 3]);
    });
    test("test-2", () => {
        const result = solution([1, 2, 3], [3, 2, 1]);
        expect(result).toEqual([1]);
    });
    test("test-8", () => {
        const result = solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 5, 4, 6, 7, 8, 9, 10]);
        expect(result).toEqual([1, 2, 3, 4, 6, 7, 8, 9, 10]);
    });
});
