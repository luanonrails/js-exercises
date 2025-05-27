const argumentsLength = require('./argumentsLength');

describe('Return Length of Arguments Passed', () => {
    test('One value was passed to the function so it should return 1', () => {
        expect(argumentsLength(5)).toBe(1);
    })

    test('Three values were passed to the function so it should return 3', () => {
        expect(argumentsLength({}, null, "3")).toBe(3);
    })
})