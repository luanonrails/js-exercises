const lengthOfLongestSubstring = function(str) {
    let longest = '';
    let sub = '';

    for (const c of str) {
        sub = sub.slice(sub.indexOf(c) + 1) + c;
        if (sub.length > longest.length) longest = sub;
    }
    return longest.length;
}

module.exports = lengthOfLongestSubstring;