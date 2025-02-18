const removeElement = require('./removeElement');

describe('removeElement', () => {
    test('nums = [3, 2, 2, 3] val = 3 output = [2, 2, _, _]', () => {
        const nums = [3, 2, 2, 3];
        const val = 3;

        expect(nums.slice(0, removeElement(nums, val))).toEqual([2, 2]);
    });
    test('nums = [0, 1, 2, 2, 3, 0, 4, 2] val = 2 output = [0, 1, 4, 0, 3, _, _, _]', () => {
        const nums = [0, 1, 2, 2, 3, 0, 4, 2];
        const val = 2;

        expect(nums.slice(0, removeElement(nums, val))).toEqual([0, 1, 4, 0, 3]);
    });
    test('nums = [2] val = 3 output = [2]', () => {
        const nums = [2];
        const val = 3;

        expect(nums.slice(0, removeElement(nums, val))).toEqual([2]);
    });
    test('nums = [3, 3] val = 3 output = []', () => {
        const nums = [3, 3];
        const val = 3;

        expect(nums.slice(0, removeElement(nums, val))).toEqual([]);
    });
    test('nums = [3, 3] val = 5 output = [3, 3]', () => {
        const nums = [3, 3];
        const val = 5;

        expect(nums.slice(0, removeElement(nums, val))).toEqual([3, 3]);
    });
    test('nums = [2, 2, 3] val = 2 output = [3]', () => {
        const nums = [2, 2, 3];
        const val = 2;

        expect(nums.slice(0, removeElement(nums, val))).toEqual([3]);
    });
})