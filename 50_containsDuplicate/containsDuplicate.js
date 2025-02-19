const containsDuplicate = function(nums) {
    const seen = [];
    for (let n of nums) {
        if (seen[n]) return true
        seen[n] = true;
    }
    return false;
}

module.exports = containsDuplicate;