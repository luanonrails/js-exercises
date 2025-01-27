const longestCommonPrefix = require('./longestCommonPrefix');

describe('longestCommonPrefix', () => {
    // Write a function to find the longest common prefix string amongst an array of strings
    // If there is no common prefix, return an empty string ""
    test('return the common prefix', () => {
        expect(longestCommonPrefix(["flower", "flow", "flight"])).toEqual("fl")
    });
    test('return an empty string when there is no common prefix', () => {
        expect(longestCommonPrefix(["dog","racecar","car"])).toEqual("")
    }); 
});