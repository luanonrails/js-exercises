const convert = require('./convert');

describe('zigzagConversion', () => {
    // Write the code that will take a string and make this conversion given a number of rows
    test('s = "PAYPALISHIRING" numRows = 3 output = "PAHNAPLSIIGYIR"', () => {
        expect(convert('PAYPALISHIRING', 3)).toEqual('PAHNAPLSIIGYIR');
    });
    test('s = "PAYPALISHIRING" numRows = 4 output = "PINALSIGYAHRPI"', () => {
        expect(convert('PAYPALISHIRING', 4)).toEqual('PINALSIGYAHRPI');
    });
    test('s = "A" numRows = 1 output = "A"', () => {
        expect(convert('A', 1)).toEqual('A');
    });
});