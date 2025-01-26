const twoSum = require('./twoSum');

describe('twoSum', () => {
    //Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    test('nums = [2, 7, 11, 15] and target = 9 should return [0, 1]', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    });
      test('nums = [3, 2, 4] and target = 6 should return [1, 2]', () => {
        expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    });
    test('nums = [3, 3] and target = 6 should return [0, 1]', () => {
        expect(twoSum([3, 3], 6)).toEqual([0, 1]);
    });
  });