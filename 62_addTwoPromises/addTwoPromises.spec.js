const addTwoPromises = require('./addTwoPromises')

describe('Add Two Promises', () => {
    test('Case 1', () => {
        const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
        const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));

        return addTwoPromises(promise1, promise2).then(ans => expect(ans).toBe(7))
    })

    test('Case 2', () => {
        const promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50));
        const promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30));

        return addTwoPromises(promise1, promise2).then(ans => expect(ans).toBe(-2))
    })
})