const findSolution = require('./findSolution');

describe('recursion', () => {
    test('starting from 1, find the sequence of additions (+5) and multiplications (*3) that results in 13', () => {
        expect(findSolution(13)).toEqual('(((1 * 3) + 5) + 5)');
    });
    test('find the sequence that results in 11', () => {
        expect(findSolution(11)).toEqual('((1 + 5) + 5)');
    });
    test('find the sequence that results in 42', () => {
        expect(findSolution(42)).toEqual('((((1 * 3) * 3) + 5) * 3)');
    });
    test('returns null when it cannot be found', () => {
        expect(findSolution(15)).toEqual(null);
    });
});