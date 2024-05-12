const solution = require(".");

describe("30. Буратино", () => {
    test("test-1", () => {
        const result = solution([
            ["09:00:00", 3600],
            ["14:00:00", 3600]
        ]);
        expect(result).toBe(8);
    });
    test("test-2", () => {
        const result = solution([
            ["09:00:00", 1800],
            ["12:59:31", 10],
            ["13:45:23", 1800],
            ["15:00:00", 3600]
        ]);
        expect(result).toBe(14);
    });
});
