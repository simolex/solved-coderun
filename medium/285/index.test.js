const { scan } = require(".");

describe("285.cave", () => {
    test("undefined 1", () => {
        const result = scan([]);
        expect(result).toEqual({ ceil: 0, floor: 0, both: 0 });
    });
    test("undefined 2", () => {
        const result = scan([[]]);
        expect(result).toEqual({ ceil: 0, floor: 0, both: 0 });
    });
    test("once empty", () => {
        const result = scan([[0]]);
        expect(result).toEqual({ ceil: 0, floor: 0, both: 0 });
    });
    test("once full", () => {
        const result = scan([[1]]);
        expect(result).toEqual({ ceil: 0, floor: 0, both: 1 });
    });
    test("test 1", () => {
        const result = scan([
            [1, 0, 1],
            [1, 1, 1],
            [0, 0, 0]
        ]);
        expect(result).toEqual({ ceil: 1, floor: 0, both: 0 });
    });
    test("test 2", () => {
        const result = scan([
            [1, 0, 1],
            [1, 1, 1],
            [0, 0, 1]
        ]);
        expect(result).toEqual({ ceil: 0, floor: 0, both: 1 });
    });
    test("test 3", () => {
        const result = scan([1, 0, 1], [0, 1, 0]);
        expect(result).toEqual({ ceil: 2, floor: 1, both: 0 });
    });
    test("test 4", () => {
        const result = scan([
            [1, 1, 0, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 0, 0],
            [0, 1, 0, 1, 0, 0, 0, 1, 1]
        ]);
        expect(result).toEqual({ ceil: 2, floor: 2, both: 1 });
    });
});
