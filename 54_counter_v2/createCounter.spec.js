const createCounter = require('./createCounter')

describe('counter v2', () => {

    test('increment', () => {
        const counter = createCounter(1);
        expect(counter.increment()).toBe(2);
    })

    test('decrement', () => {
        const counter = createCounter(10);
        expect(counter.decrement()).toBe(9);
    })

    test('reset', () => {
        const counter = createCounter(42);
        counter.increment();
        counter.increment();

        expect(counter.reset()).toBe(42);
    })
})