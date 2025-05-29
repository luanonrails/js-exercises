const memoize = require('./memoize')

describe('Memoize', () => {
    test('Case 1', () => {
        let callCount = 0;

        const sum = (a, b) => {
            callCount++;
            return a + b;
        }

        const memoizedFn = memoize(sum);

        expect(memoizedFn(2, 2)).toBe(4);
        expect(memoizedFn(2, 2)).toBe(4);
        expect(callCount).toBe(1);
        expect(memoizedFn(1, 2)).toBe(3);
        expect(callCount).toBe(2);
    })

    test('Case 2', () => {
        let callCount = 0;

        const factorial = (n) => {
            callCount++;
            let ans = 1;
            for (let i = 2; i <= n; i++) {
                ans *= i;
            }
            return ans;
        }

        const memoizedFn = memoize(factorial);

        expect(memoizedFn(2)).toBe(2);
        expect(memoizedFn(3)).toBe(6);
        expect(memoizedFn(2)).toBe(2);
        expect(callCount).toBe(2);
        expect(memoizedFn(3)).toBe(6);
        expect(callCount).toBe(2);
    })

    test('Case 3', () => {
        let callCount = 0;
        
        const fib = (pos) => {
            callCount++;
            let current = 1;
            let next = 1;

            for(let i = 0; i < pos; i++) {
                [current, next] = [next, current + next];
            }
            return current;
        }

        const memoizedFn = memoize(fib);

        expect(memoizedFn(5)).toBe(8);
        expect(callCount).toBe(1);
    })
})