const singleNumber = function(nums) {
    let single;
    for (let n of nums) {
        single ^= n;
    }
    return single;
}

module.exports = singleNumber;