const createCounter = require('./createCounter');

describe('counter', () => {
    const counter = createCounter(42);

    test('The first time counter() is called, it returns n', () => {
        expect(counter()).toBe(42);
    });

    test('Returns 1 more than the previous time', () => {
        expect(counter()).toBe(43);
    });

    test('Returns 1 more than the previous time', () => {
        expect(counter()).toBe(44);
    });
})