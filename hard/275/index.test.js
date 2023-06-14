const remember = require(".");
const setForTest1 = require("./test-set.js");

describe("275.putting-it-on-the-shelves", () => {
    test("test", () => {
        const result = remember(setForTest1);
        expect(result).toBe(`## Отзывы

- Классный ноутбук! - про МакБук PRO 2035 13\' w/ clickbar
  - Не понравился! Кликбар не работает совсем!
- Хорошая цена, у малыша не было аллергии на неё - про Смесь Friso Frisolaс Gold 2035

## Товары

- МакБук PRO 2035 13' w/ clickbar
  * Фигурка Funko POP! Vinyl: Overwatch Уинстон
- Смесь Friso Frisolaс Gold 2035
  * Фигурка Funko POP! Vinyl: Overwatch Уинстон
- Фигурка Funko POP! Vinyl: Overwatch Уинстон
  * МакБук PRO 2035 13' w/ clickbar
  * Смесь Friso Frisolaс Gold 2035
`);
    });
});
