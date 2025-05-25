const reduce = function(nums, fn, init) {
    let accumulator = init;

    for (let num of nums) {
        accumulator = fn(accumulator, num);
    }
    return accumulator;
}

module.exports = reduce;