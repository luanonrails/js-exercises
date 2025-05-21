const myFunction = require('./expect');

describe('To Be Or Not To Be', () => {
    test('5 === 5 so this expression returns true', () => {
        expect(myFunction(5).toBe(5)).toBe(true);
    });

    test('5 !== null so this expression throw the error "Not Equal"', () => {
        expect(() => myFunction(5).toBe(null)).toThrow('Not Equal');
    })

    test('5 !== null so this expression returns true', () => {
        expect(myFunction(5).notToBe(null)).toBe(true);
    })
})