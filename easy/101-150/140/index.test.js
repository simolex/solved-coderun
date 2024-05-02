const solution = require(".");

describe("140. Стек с защитой от ошибок", () => {
    test("test-1", () => {
        const result = solution(["push 1", "back", "exit"]);
        expect(result).toEqual(["ok", 1, "bye"]);
    });
    test("test-2", () => {
        const result = solution(["size", "push 1", "size", "push 2", "size", "push 3", "size", "exit"]);
        expect(result).toEqual([0, "ok", 1, "ok", 2, "ok", 3, "bye"]);
    });
    test("test-3", () => {
        const result = solution([
            "push 3",
            "push 14",
            "size",
            "clear",
            "push 1",
            "back",
            "push 2",
            "back",
            "pop",
            "size",
            "pop",
            "size",
            "exit"
        ]);
        expect(result).toEqual(["ok", "ok", 2, "ok", "ok", 1, "ok", 2, 2, 1, 1, 0, "bye"]);
    });
});
