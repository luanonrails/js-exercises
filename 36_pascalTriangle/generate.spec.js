const generate = require('./generate');

describe('pascalTriangle', () => {
    // Given an integer numRows, return the first numRows of Pascal's triangle.
    test('numRows = 1', () => {
        expect(generate(1)).toEqual([[1]]);
    })
    test('numRows = 2', () => {
        expect(generate(2)).toEqual([[1],[1, 1]]);
    })
    test('numRows = 5', () => {
        expect(generate(5)).toEqual([[1],[1, 1],[1, 2, 1],[1, 3, 3, 1],[1, 4, 6, 4, 1]]);
    })
});