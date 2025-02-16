const binaryGap = require('./binaryGap');

describe('binaryGap', () => {
    // Given a positive integer n, find and return the longest distance between any two adjacent 1's in the binary representation of n.
    // If there are no two adjacent 1's, return 0.
    test('input = 22 output = 2', () => {
        expect(binaryGap(22)).toBe(2);
    })
    test('input = 8 output = 0', () => {
        expect(binaryGap(8)).toBe(0);
    })
    test('input = 5 output = 2', () => {
        expect(binaryGap(5)).toBe(2);
    })
    test('input = 10002 output = 4', () => {
        expect(binaryGap(10002)).toBe(4);
    })
});