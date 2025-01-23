const romanToInt = require('./romanToInt');

describe('romanToInt', () => {
    test('convert IV to 4', () => {
        expect(romanToInt('IV')).toEqual(4);
      });
    test('convert IX to 9', () => {
        expect(romanToInt('IX')).toEqual(9);
      });
    test('convert X to 10 ', () => {
        expect(romanToInt('X')).toEqual(10);
      });
    test('convert XLII to 42', () => {
      expect(romanToInt('XLII')).toEqual(42);
    });
    test('convert C to 100', () => {
        expect(romanToInt('C')).toEqual(100);
      });
    test('convert CD to 400', () => {
        expect(romanToInt('CD')).toEqual(400);
    });
    test('convert D to 500', () => {
        expect(romanToInt('D')).toEqual(500);
    });
    test('convert MMXXV to 2025', () => {
        expect(romanToInt('MMXXV')).toEqual(2025);
      });
  });