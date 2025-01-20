const divisibleSumPairs = require('./divisibleSumPairs')

describe('divisibleSumPairs', () => {
  test('determine the number of (i,j) pairs where i < j and array[i] + array[j] is divisible by n', () => {
    expect(divisibleSumPairs(3, [1, 3, 2, 6, 1, 2])).toBe(5);
  });
  test('accepts a array with negative numbers', () => {
    expect(divisibleSumPairs(4, [-2, 6, 10, 1, 7, 5, 6])).toBe(8);
  });
  test('returns 0 for an empty array', () => {
    expect(divisibleSumPairs(3, [])).toBe(0);
  });
  test('returns 0 for an array with only one element', () => {
    expect(divisibleSumPairs(3, [3])).toBe(0);
  });
});