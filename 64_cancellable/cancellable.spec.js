const cancellable = require('./cancellable');

jest.useFakeTimers();

describe('Timeout Cancellation', () => {
    test('should call the function after the specified time', () => {
        const mockFn = jest.fn();
        cancellable(mockFn, [1, 2], 1000);

        expect(mockFn).not.toBeCalled();

        jest.advanceTimersByTime(1000);

        expect(mockFn).toBeCalledTimes(1);
        expect(mockFn).toBeCalledWith(1, 2);
    });

    test('should not call the function if cancelled before the delay', () => {
        const mockFn = jest.fn();
        const cancelFn = cancellable(mockFn, [1, 2], 1000);

        jest.advanceTimersByTime(500);

        cancelFn();

        jest.advanceTimersByTime(500);

        expect(mockFn).not.toBeCalled();
    });
});