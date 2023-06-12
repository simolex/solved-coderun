const soup = require(".");

const mapString = `+----------------0---------------+
|                                |
|                                |
|          Y        D            |
|     A                          |
|              E                 |
|           N                    |
|  Y                             1
3        Y    D                  |
|         A              X       |
|                                |
+----------------2---------------+`;

describe("Yandex soup", () => {
    test("test", () => {
        const result = soup(mapString);
        expect(result).toBe(11);
    });
});
