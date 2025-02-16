const bubbleSort = require('./bubbleSort')

describe('bubbleSort', () => {
    test('sort array of positive numbers', () => {
        expect(bubbleSort([7, 10, 8, 3])).toEqual([3, 7, 8, 10]);
    });
    test('sort array with negative numbers', () => {
        expect(bubbleSort([-5, -2, 3, 1])).toEqual([-5, -2, 1, 3]);
    });
    test('sort rational numbers', () => {
        expect(bubbleSort([9.2, 5.6, 7.8, 8.9, 3])).toEqual([3, 5.6, 7.8, 8.9, 9.2]);
    });
    test('sort character array', () => {
        expect(bubbleSort(['d', 'a', 'c', 'b'])).toEqual(['a', 'b', 'c', 'd']);
    });
});