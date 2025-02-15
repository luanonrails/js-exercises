const maximumGap = require('./maximumGap');

describe('maximumGap', () => {
    // Given an integer array nums, return the maximum difference between two successive elements in its sorted form. 
    // If the array contains less than two elements, return 0.
    test('input = [3, 6, 9, 1] output = 3', () => {
        expect(maximumGap([3, 6, 9, 1])).toBe(3);
    });
    test('input = [10] output = 0', () => {
        expect(maximumGap([10])).toBe(0);
    });
    test('input = [0, 6, 9, 1] output = 5', () => {
        expect(maximumGap([0, 6, 9, 1])).toBe(5);
    });
    test('input = [3, 6, 9, 1] output = 3', () => {
        expect(maximumGap([9, 10, 0])).toBe(9);
    });
})