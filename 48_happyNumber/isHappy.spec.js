const isHappy = require('./isHappy');

describe('isHappy', () => {
    test('check if the number 19 is a happy number', () => {
        expect(isHappy(19)).toBe(true);
    });
    test('check if the number 2 is a happy number', () => {
        expect(isHappy(2)).toBe(false);
    });
});