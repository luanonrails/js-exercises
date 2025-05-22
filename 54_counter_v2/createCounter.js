const createCounter = function(init) {
    let num = init;
    return {
        increment: () => {
            return ++num;
        },
        decrement: () => {
            return --num;
        },
        reset: () => {
            num = init;
            return num;
        }
    }
};

module.exports = createCounter;