const remember = require(".");
const setForTest1 = require("./test-set1.js");

describe("192.musicMan", () => {
    test("test 1", () => {
        const result = remember(setForTest1);
        expect(result).toBe(`## Жанры

- Нерок: Бритый гриб
- Рок
  - Акустик-рок: Красный слой
  - Классик-рок: Жёлтый мох
  - Полурок: Бритый гриб

## Группы

- Бритый гриб
- Жёлтый мох, друзья: Бритый гриб, Красный слой
- Красный слой, друзья: Жёлтый мох
`);
    });
});
