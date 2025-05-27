const once = require('./once');

describe('Allow One Function Call', () => {
    test('Case 1', () => {
        const onceFn = once((a, b, c) => a + b + c);
        expect(onceFn(1, 2, 3)).toBe(6);
        expect(onceFn(2, 3, 6)).toBe(undefined);
    })

    test('Case 2', () => {
        const onceFn = once((a, b, c) => a * b * c);
        expect(onceFn(5, 7, 4)).toBe(140);
        expect(onceFn(2, 3, 6)).toBe(undefined);
        expect(onceFn(4, 6, 8)).toBe(undefined);
    })
});