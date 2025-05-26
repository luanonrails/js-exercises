const compose = require('./compose')

describe('Function Composition', () => {
    test('Case 1', () => {
        const functions = [x => x + 1, x => x * x, x => 2 * x];
        const x = 4;
        expect(compose(functions)(x)).toBe(65);
    })

    test('Case 2', () => {
        const functions = [x => 10 * x, x => 10 * x, x => 10 * x];
        const x = 1;
        expect(compose(functions)(x)).toBe(1000);
    })

    test('Case 3', () => {
        const functions = [];
        const x = 42;
        expect(compose(functions)(x)).toBe(42);
    })
})