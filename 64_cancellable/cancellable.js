const cancellable = function(fn, args, t) {
    const delay = setTimeout(fn, t, ...args);
    return function() {
        clearTimeout(delay);
    }
}

module.exports = cancellable;