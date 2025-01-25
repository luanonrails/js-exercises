const findTheSequence = require('./findTheSequence');

describe('findTheSequence', () => {
    //starting from the number 1, and repeatedly either adding 5 or multiplying by 3, 
    //the goal is to find a sequence of these operations that results in the given number
    test('find the sequence that results in 13', () => {
        expect(findTheSequence(13)).toEqual('(((1 * 3) + 5) + 5)');
    });
    test('find the sequence that results in 11', () => {
        expect(findTheSequence(11)).toEqual('((1 + 5) + 5)');
    });
    test('find the sequence that results in 42', () => {
        expect(findTheSequence(42)).toEqual('((((1 * 3) * 3) + 5) * 3)');
    });
    test('returns null when it cannot be found', () => {
        expect(findTheSequence(15)).toEqual(null);
    });
});