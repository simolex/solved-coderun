const solution = require(".");

describe("101. Diplomas", () => {
    test("test-1", () => {
        const result = solution([
            "....****",
            "....****",
            "....****",
            "....****",
            "****....",
            "****....",
            "****....",
            "****...."
        ]);
        expect(result).toBe(48);
    });
    test("test-2", () => {
        const result = solution([
            "********",
            "********",
            "********",
            "********",
            "********",
            "********",
            "********",
            "********"
        ]);
        expect(result).toBe(0);
    });
    test("test-3", () => {
        const result = solution([
            "********",
            "********",
            "********",
            "********",
            "********",
            "********",
            "******..",
            "........"
        ]);
        expect(result).toBe(1);
    });
});
