const containsDuplicate = require('./containsDuplicate');

describe('containsDuplicate', () => {
    test('input = [1, 2, 3, 1] output = true', () => {
        expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
    });
    test('input = [1, 2, 3, 4] output = false', () => {
        expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
    });
    test('input = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2] output = true', () => {
        expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
    });
    test('input = [] output = false', () => {
        expect(containsDuplicate([])).toBe(false);
    });
});