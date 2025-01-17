const timeConversion = require('./timeConversion')

describe('timeConversion', () => {
    test('convert 08:35:00AM to 08:35:00 (24-hour format)', () => {
        expect(timeConversion('08:35:00AM')).toBe('08:35:00');
    })
    test('convert 08:35:00PM to 20:35:00 (24-hour format)', () => {
        expect(timeConversion('08:35:00PM')).toBe('20:35:00');
    })
    test('convert 12:01:00PM to 12:01:00 (24-hour format)', () => {
        expect(timeConversion('12:01:00PM')).toBe('12:01:00');
    })
    test('convert 12:35:00AM to 00:35:00 (24-hour format)', () => {
        expect(timeConversion('12:35:00AM')).toBe('00:35:00');
    })
});