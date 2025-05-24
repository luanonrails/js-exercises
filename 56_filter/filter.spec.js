const filter = require('./filter');

describe('Filter Elements from Array', () => {
    test('The function filters out values that are not greater than 10', () => {
        expect(filter([0, 10, 20, 30], (n) => n > 10)).toEqual([20, 30]);
    })

    test('In this case, the function removes elements not at index 0', () => {
        expect(filter([1, 2, 3], (n, i) => i === 0)).toEqual([1]);
    })

    test('Falsy values such as 0 should be filtered out', () => {
        expect(filter([-2, -1, 0, 1, 2], (n) => n + 1)).toEqual([-2, 0, 1, 2]);
    })
})