const solution = require(".");

describe("30. Буратино", () => {
    test("test-1", () => {
        const result = solution([
            ["09:00:00", 3600],
            ["14:00:00", 3600],
        ]);
        expect(result).toBe(8);
    });
    test("test-2", () => {
        const result = solution([
            ["09:00:00", 1800],
            ["12:59:31", 10],
            ["13:45:23", 1800],
            ["15:00:00", 3600],
        ]);
        expect(result).toBe(14);
    });
    test("test-4", () => {
        const result = solution([
            ["09:00:00", 3600],
            ["13:00:00", 1],
            ["13:02:00", 1],
            ["13:04:58", 4],
            ["13:45:54", 3],
            ["13:56:12", 1],
            ["13:59:55", 1],
            ["14:00:03", 14399],
        ]);
        expect(result).toBe(7);
    });
});
