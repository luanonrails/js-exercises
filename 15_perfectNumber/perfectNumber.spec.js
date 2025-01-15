const perfectNumber = require('./perfectNumber')

describe('perfectNumber', () => {
    test('check if the number 1 not is a perfect number', () => {
        expect(perfectNumber(1)).toBe(false);
    });
    test('check if the number 6 is a perfect number', () => {
        expect(perfectNumber(6)).toBe(true);
    });
    test('check if the number 7 not is a perfect number', () => {
        expect(perfectNumber(7)).toBe(false);
    });
    test('check if the number 28 is a perfect number', () => {
        expect(perfectNumber(28)).toBe(true);
    });
    test('check if the number 8128 is a perfect number', () => {
        expect(perfectNumber(8128)).toBe(true);
    });
    test('doesn\'t accept negatives', () => {
        expect(perfectNumber(-25)).toBe('OOPS');
      });
});