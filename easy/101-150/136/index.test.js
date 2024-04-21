const solution = require(".");

describe("136. SNTP", () => {
    test("test-1", () => {
        const result = solution("15:01:00", "18:09:45", "15:01:40");
        expect(result).toBe("18:10:05");
    });
});
