const createCounter = function(n) {
    n = n--;

    return function() {
        return n++;
    };
}

module.exports = createCounter;