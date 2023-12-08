const setStyles = require(".");

describe("365. Apply styles", () => {
    test("test", () => {
        const result = setStyles(htmlSet0, cssSet0);
        expect(result).toEqual(resultSet0);
    });
});
