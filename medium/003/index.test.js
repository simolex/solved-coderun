const solution = require(".");

describe("3. Вывести маршрут максимальной стоимости", () => {
    test("test-1", () => {
        const result = solution(5, 5, [
            [9, 9, 9, 9, 9],
            [3, 0, 0, 0, 0],
            [9, 9, 9, 9, 9],
            [6, 6, 6, 6, 8],
            [9, 9, 9, 9, 9],
        ]);
        expect(result).toEqual([74, ["D", "D", "R", "R", "R", "R", "D", "D"]]);
    });
});
