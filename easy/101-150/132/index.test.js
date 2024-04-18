const solution = require(".");
//number-of-triangles

describe("132. Коллекционер Диего", () => {
    test("test-1", () => {
        const result = solution([5], [2, 6]);
        expect(result).toEqual([0, 1]);
    });
    test("test-2", () => {
        const result = solution([100, 1, 50], [300, 0, 75]);
        expect(result).toEqual([3, 0, 2]);
    });
});
