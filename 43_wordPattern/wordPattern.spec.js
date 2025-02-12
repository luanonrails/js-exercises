const wordPattern = require('./wordPattern');

describe('wordPattern', () => {
    // Given a pattern and a string s, find if s follows the same pattern.
    test('pattern = "abba" s = "dog cat cat dog" output = true', () => {
        expect(wordPattern('abba', 'dog cat cat dog')).toBe(true);
    });
    test('pattern = "abba" s = "dog cat cat fish" output = false', () => {
        expect(wordPattern('abba', 'dog cat cat fish')).toBe(false);
    });
    test('pattern = "abba" s = "dog dog dog dog" output = false', () => {
        expect(wordPattern('abba', 'dog dog dog dog')).toBe(false);
    });
    test('pattern = "aaaa" s = "dog cat cat dog" output = false', () => {
        expect(wordPattern('aaaa', 'dog cat cat dog')).toBe(false);
    });
})