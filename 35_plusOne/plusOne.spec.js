const plusOne = require('./plusOne');

describe('plusOne', () => {
    test('input = [1, 2, 3] output = [1, 2, 4]', () => {
        expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
    });
    test('input = [4, 3, 2, 1] output = [4, 3, 2, 2]', () => {
        expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
    });
    test('input = [9] output = [1, 0]', () => {
        expect(plusOne([9])).toEqual([1, 0]);
    });
});