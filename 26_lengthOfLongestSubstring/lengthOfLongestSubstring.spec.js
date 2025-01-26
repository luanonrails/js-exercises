const lengthOfLongestSubstring = require('./lengthOfLongestSubstring');

describe('lengthOfLongestSubstring', () => {
    //Given a string s, find the length of the longest substring without repeating characters.
    test('the answer is "abc", with the length of 3', () => {
        expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
    });
    test('the answer is "b", with the length of 1', () => {
        expect(lengthOfLongestSubstring('bbbbb')).toEqual(1);
    });
    test('the answer is "wke", with the length of 3', () => {
        expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
    });
    test('the answer is " ", with the length of 1', () => {
        expect(lengthOfLongestSubstring(' ')).toEqual(1);
    });
    test('the answer is "show", with the length of 4', () => {
        expect(lengthOfLongestSubstring('ahshow')).toEqual(4);
    });
  });