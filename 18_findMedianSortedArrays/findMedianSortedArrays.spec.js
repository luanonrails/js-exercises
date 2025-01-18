const findMedianSortedArrays = require('./findMedianSortedArrays')

describe('findMedianSortedArrays', () => {
    test('merged array = [1, 2, 3] and median is 2', () => {
        expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
    })
    test('merged array = [1, 2, 3, 4] and median is (2 + 3) / 2 = 2.5', () => {
        expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
    })
    test('merged array = [3, 4, 7, 8, 9] and median is 7', () => {
        expect(findMedianSortedArrays([3, 7], [4, 8, 9])).toBe(7);
    })
    test('merged array = [2, 4, 8, 10] and median is (4 + 8) / 2 = 6', () => {
        expect(findMedianSortedArrays([2, 4, 10], [8])).toBe(6);
    })
});