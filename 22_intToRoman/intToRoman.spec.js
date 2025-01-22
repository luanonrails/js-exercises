const intToRoman = require('./intToRoman');

describe('intToRoman', () => {
    test('convert 4 to IV', () => {
        expect(intToRoman(4)).toEqual('IV');
      });
    test('convert 9 to IX', () => {
        expect(intToRoman(9)).toEqual('IX');
      });
    test('convert 10 to X', () => {
        expect(intToRoman(10)).toEqual('X');
      });
    test('convert 42 to XLII', () => {
      expect(intToRoman(42)).toEqual('XLII');
    });
    test('convert 100 to C', () => {
        expect(intToRoman(100)).toEqual('C');
      });
    test('convert 400 to CD', () => {
        expect(intToRoman(400)).toEqual('CD');
    });
    test('convert 500 to D', () => {
        expect(intToRoman(500)).toEqual('D');
    });
    test('convert 2025 to MMXXV', () => {
        expect(intToRoman(2025)).toEqual('MMXXV');
      });
  });