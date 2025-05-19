const createHelloWorld = require('./createHelloWorld');

describe('Create Hello World Function', () => {
    test('The function returned by createHelloWorld should always return "Hello World"', () => {
        expect(createHelloWorld()()).toEqual("Hello World");
    });
        test('Any arguments could be passed to the function but it should still always return "Hello World"', () => {
        expect(createHelloWorld()([{}, null, 42])).toEqual("Hello World");
    });
})