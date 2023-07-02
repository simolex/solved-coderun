const jsonToHtml = require(".");
const setForTest = require("./input.json");

describe("364. Figma to HTML", () => {
    test("test", () => {
        const result = jsonToHtml(setForTest);
        expect(result).toBe(setForTest);
    });
});
