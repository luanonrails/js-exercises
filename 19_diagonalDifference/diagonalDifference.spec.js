const diagonalDifference = require('./diagonalDifference')

describe('diagonalDifference', () => {
  test('calculate the absolute difference between the sums of its diagonals', () => {
    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [9, 8, 9],
    ]
    expect(diagonalDifference(matrix)).toBe(2);
  });
  test('accepts a matrix with negative numbers', () => {
    const matrix = [
        [11, 2, 4],
        [4, 5, 6],
        [10, 8, -12],
    ]
    expect(diagonalDifference(matrix)).toBe(15);
  });
});