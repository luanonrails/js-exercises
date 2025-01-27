const longestCommonPrefix = function(array) {
    let longest = '';
    let prefix = '';
    for (let c of array[0]) {
        prefix += c;
        if (array.every(str => str.slice(0, prefix.length) == prefix))
            longest = prefix;
        else 
            break;
    }
    return longest;
}

module.exports = longestCommonPrefix