const maximumGap = function(nums) {
    nums = nums.sort((a, b) => a - b);
    let max = 0;
    for (let i = 1; i < nums.length; i++) {
        let [a, b] = [nums[i - 1], nums[i]]
        max = Math.max(max, b - a);
    }
    return max;
}

module.exports = maximumGap;