const findSequence = require('./findSequence');

describe('findSequence', () => {
    //starting from the number 1, and repeatedly either adding 5 or multiplying by 3, 
    //the goal is to find a sequence of these operations that results in the given number
    test('find the sequence that results in 13', () => {
        expect(findSequence(13)).toEqual('(((1 * 3) + 5) + 5)');
    });
    test('find the sequence that results in 11', () => {
        expect(findSequence(11)).toEqual('((1 + 5) + 5)');
    });
    test('find the sequence that results in 42', () => {
        expect(findSequence(42)).toEqual('((((1 * 3) * 3) + 5) * 3)');
    });
    test('returns null when it cannot be found', () => {
        expect(findSequence(15)).toEqual(null);
    });
});