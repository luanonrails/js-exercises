const bubbleSort = require('./bubbleSort')

describe('bubbleSort', () => {
    test('sort array of positive numbers', () => {
        expect(bubbleSort([7, 10, 8, 3])).toEqual([3, 7, 8, 10]);
    });
    test('sort array with negative numbers', () => {
        expect(bubbleSort([-5, -2, 3, 1])).toEqual([-5, -2, 1, 3]);
    });
    test('sort character array', () => {
        expect(bubbleSort(['Y', 'Z', 'A', 'C'])).toEqual(['A', 'C', 'Y', 'Z']);
    });
});