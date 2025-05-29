const memoize = function(fn) {
    const cache = {};
    return function(...args) {
        const params = JSON.stringify(args);

        if (!cache.hasOwnProperty(params)) {
            cache[params] = fn(...args);
        }

        return cache[params];
    }
}

module.exports = memoize;