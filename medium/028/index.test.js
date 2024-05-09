const solution = require(".");

describe("28. НВП с восстановлением ответа", () => {
    test("test-1", () => {
        const result = solution([3, 29, 5, 5, 28, 6]);
        expect(result).toEqual([3, 5, 28]);
    });
    test("test-2", () => {
        const result = solution([4, 8, 2, 6, 2, 10, 6, 29, 58, 9]);
        expect(result).toEqual([4, 8, 10, 29, 58]);
    });
});
