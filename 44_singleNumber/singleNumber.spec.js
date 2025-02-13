const singleNumber = require('./singleNumber');

describe('singleNumber', () => {
    // Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
    // You must implement a solution with a linear runtime complexity and use only constant extra space.
    test('input = [2, 2, 1] output = 1', () => {
        expect(singleNumber([2, 2, 1])).toBe(1);
    });
    test('input = [4, 1, 2, 1, 2] output = 4', () => {
        expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
    });
    test('input = [1] output = 1', () => {
        expect(singleNumber([1])).toBe(1);
    });
    test('input = [1, 7, 9, 4, 9, 7, 1] output = 4', () => {
        expect(singleNumber([1, 7, 9, 4, 9, 7, 1])).toBe(4);
    });
});