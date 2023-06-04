const { isRelativies } = require(".");

describe("gen AT-TA", () => {
    test("level 1", () => {
        const result = isRelativies("AT", "TA", 1);
        expect(result).toBe(true);
    });
    test("level 0", () => {
        const result = isRelativies("AT", "TA", 0);
        expect(result).toBe(false);
    });
    test("level 5", () => {
        const result = isRelativies("AT", "TA", 5);
        expect(result).toBe(true);
    });
});

describe("gen ATGGC-TG", () => {
    test("level 2", () => {
        const result = isRelativies("ATGGC", "TG", 3);
        expect(result).toBe(true);
    });
    test("level 3", () => {
        const result = isRelativies("ATGGC", "TG", 2);
        expect(result).toBe(false);
    });
    test("level 10", () => {
        const result = isRelativies("ATGGC", "TG", 10);
        expect(result).toBe(true);
    });
});

describe("gen AAA-AAA", () => {
    test("level 0", () => {
        const result = isRelativies("AAA", "AAA", 0);
        expect(result).toBe(true);
    });
    test("level 5", () => {
        const result = isRelativies("AAA", "AAA", 5);
        expect(result).toBe(true);
    });
    test("level 55", () => {
        const result = isRelativies("AAA", "AAA", 55);
        expect(result).toBe(true);
    });
});

describe("gen ATTTGCGC-CGCGATTT", () => {
    test("level 0", () => {
        const result = isRelativies("ATTTGCGC", "CGCGATTT", 4);
        expect(result).toBe(true);
    });
    test("level 5", () => {
        const result = isRelativies("ATTTGCGC", "CGCGATTT", 2);
        expect(result).toBe(false);
    });
});

describe("gen G-T", () => {
    test("level 1", () => {
        const result = isRelativies("G", "T", 1);
        expect(result).toBe(false);
    });
});
