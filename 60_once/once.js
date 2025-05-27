const once = function(fn) {
    let firstTime = true;
    return function(...args) {
        if (firstTime) {
            firstTime = false;
            return fn(...args);
        }
    }
}

module.exports = once;