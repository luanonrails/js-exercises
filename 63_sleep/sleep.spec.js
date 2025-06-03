const sleep = require('./sleep');

describe('Sleep', () => {
    test('It should return a promise that resolves after 100ms', async () => {
        const t = Date.now();
        await sleep(100);
        const ms = Date.now() - t;
        expect(ms >= 100 && ms <= 110 ? 100 : ms).toBe(100);

    });

    test('It should return a promise that resolves after 200ms', async () => {
        const t = Date.now();
        await sleep(200);
        const ms = Date.now() - t;
        expect(ms >= 200 && ms <= 210 ? 200 : ms).toBe(200);
    });
})