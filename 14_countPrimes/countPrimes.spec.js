const countPrimes = require('./countPrimes')

describe('countPrimes', () => {
    test('prime numbers less than or equal 10', () => {
        expect(countPrimes(10)).toEqual(4);
    });
    test('prime numbers less than or equal 100', () => {
        expect(countPrimes(100)).toEqual(25);
    });
    test('prime numbers less than or equal 1', () => {
        expect(countPrimes(1)).toEqual(0);
    });
    test('doesn\'t accept negatives', () => {
        expect(countPrimes(-10)).toEqual('OOPS');
    });
});