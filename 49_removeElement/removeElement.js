const removeElement = function(nums, val) {
    let j = nums.length - 1;
    for (let i = 0; i < j; i++) {
        if (nums[i] == val) {
            while (nums[j] == val) {
                j--;
            }
            if (j <= i) break;
            [nums[i], nums[j]] = [nums[j], nums[i]]
        }
    }
    let k = nums.indexOf(val);
    return k < 0 ? nums.length : k;
}

module.exports = removeElement;