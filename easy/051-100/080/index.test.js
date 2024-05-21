const solution = require(".");

describe("80. Телефонные номера", () => {
    test("test-1", () => {
        const result = solution([
            "8(495)430-23-97",
            "+7-4-9-5-43-023-97",
            "4-3-0-2-3-9-7",
            "8-495-430",
        ]);
        expect(result).toEqual(["YES", "YES", "NO"]);
    });
    test("test-2", () => {
        const result = solution(["86406361642", "83341994118", "86406361642", "83341994118"]);
        expect(result).toEqual(["NO", "YES", "NO"]);
    });
    test("test-3", () => {
        const result = solution(["+78047952807", "+78047952807", "+76147514928", "88047952807"]);
        expect(result).toEqual(["YES", "NO", "YES"]);
    });
});
