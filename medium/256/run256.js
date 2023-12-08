const decode = require("./256.medium.js");

console.log(
    decode(`import { classNames } from './classNames';

describe('classNames', () => {
    it('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    it('with additional class', () => {
        const expected = 'someClass additionalClass-1 additionalClass-2';
        expect(classNames('someClass', {}, ['additionalClass-1', 'additionalClass-2'])).toBe(
            expected,
        );
    });
    it('with mods', () => {
        const expected = 'someClass additionalClass-1 additionalClass-2 hovered scrollable';
        expect(
            classNames('someClass', { hovered: true, scrollable: true }, [
                'additionalClass-1',
                'additionalClass-2',
            ]),
        ).toBe(expected);
    });
    it.skip('with mods false', () => {
        const expected = 'someClass additionalClass-1 additionalClass-2 hovered';
        expect(
            classNames('someClass', { hovered: true, scrollable: false }, [
                'additionalClass-1',
                'additionalClass-2',
            ]),
        ).toBe(expected);
    });
    it('with mods undefined', () => {
        const expected = 'someClass additionalClass-1 additionalClass-2 hovered';
        expect(
            classNames('someClass', { hovered: true, scrollable: undefined }, [
                'additionalClass-1',
                'additionalClass-2',
            ]),
        ).toBe(expected);
    });
});
`)
);
