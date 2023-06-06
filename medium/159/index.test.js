const createHtml = require(".");

describe("285.cave", () => {
    test("test 1", () => {
        const result = createHtml(`
* test
`);
        expect(result).toEqual("<ul><li>test</li></ul>");
    });
    test("test 2", () => {
        const result = createHtml(`
* item
* item
`);
        expect(result).toEqual("<ul><li>item</li><li>item</li></ul>");
    });
    test("test 3", () => {
        const result = createHtml(`
* test

* test 2
`);
        expect(result).toEqual("<ul><li>test</li></ul><ul><li>test 2</li></ul>");
    });
    test("test 4", () => {
        const result = createHtml(`test`);
        expect(result).toEqual("<p>test</p>");
    });

    test("test 5", () => {
        const result = createHtml(`
= head

text ((https://ya.ru link)) text.

* item
* item
`);
        expect(result).toEqual(
            '<h1>head</h1><p>text <a href="https://ya.ru">link</a> text.</p><ul><li>item</li><li>item</li></ul>'
        );
    });
});
