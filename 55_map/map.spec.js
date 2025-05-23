const map = require('./map');

describe('Apply Transform Over Each Element in Array', () => {
    test('The function increases each value in the array by one', () => {
        expect(map([2, 4, 6], i => ++i)).toEqual([3, 5, 7]);
    })

    test('The function increases each value by the index it resides in', () => {
        expect(map([1, 2, 3], (n, i) => n + i)).toEqual([1, 3, 5]);
    })

    test('The function always returns 42', () => {
        expect(map([10, 20 ,30], () => 42)).toEqual([42, 42, 42]);
    })
})