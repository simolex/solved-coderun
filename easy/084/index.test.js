const getCountShot = require(".");

describe("55. Angry pigs", () => {
    test("test", () => {
        const result = getCountShot([
            [1, 1],
            [2, 2],
            [3, 3],
            [2, 1],
            [3, 2],
            [3, 1]
        ]);
        expect(result).toBe(3);
    });
    test("test", () => {
        const result = getCountShot([
            [1, 1],
            [2, 2],
            [3, 3],
            [2, 1],
            [3, 2],
            [3, 4]
        ]);
        expect(result).toBe(3);
    });
});
