const isAnagram = require('./isAnagram')

describe('isAnagram', () => {
    test('works with upper-case letters', () => {
        expect(isAnagram('Anagram', 'Nagaram')).toBe(true);
    });
    test('works with multiple words', () => {
        expect(isAnagram('Elvis Presley', 'Presley lives')).toBe(true);
    });
    test('ignore punctuation', () => {
        expect(isAnagram('dusty!', 'study')).toBe(true);
    });
    test('doesn\'t just always return true', () => {
        expect(isAnagram('car', 'rat')).toBe(false);
    });
});