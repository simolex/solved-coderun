const layout = require(".");

describe("363. Zoom layout", () => {
    test("1 frame", () => {
        const result = layout(1, 100, 100);
        expect(result).toEqual([
            {
                x: 0,
                y: 0,
                width: 100,
                height: 100
            }
        ]);
    });
    test("2 frame", () => {
        const result = layout(2, 1200, 900);
        expect(result).toEqual([
            {
                x: 0,
                y: 225,
                width: 600,
                height: 450
            },
            {
                x: 600,
                y: 225,
                width: 600,
                height: 450
            }
        ]);
    });
    test("3 frame", () => {
        const result = layout(3, 1200, 900);
        expect(result).toEqual([
            {
                x: 300,
                y: 0,
                width: 600,
                height: 450
            },
            {
                x: 0,
                y: 450,
                width: 600,
                height: 450
            },
            {
                x: 600,
                y: 450,
                width: 600,
                height: 450
            }
        ]);
    });
});
