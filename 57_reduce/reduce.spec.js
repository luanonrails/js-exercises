const reduce = require('./reduce')

describe('Array Reduce Transformation', () => {
    test('The final answer is 10', () => {
        const sum = (accumulator, current) => accumulator + current;
        expect(reduce([1, 2, 3, 4], sum, 0)).toBe(10);
    })

    test('The final answer is 130', () => {
        const sum = (accumulator, current) => accumulator + current * current;
        expect(reduce([1, 2, 3, 4], sum, 100)).toBe(130);
    })

    test('For empty arrays, the answer is always init', () => {
        const sum = () => 0;
        expect(reduce([], sum, 25)).toBe(25);
    })
})