const singleNumber = function(nums) {
    let single;
    for (n of nums) {
        single ^= n;
    }
    return single;
}

module.exports = singleNumber;