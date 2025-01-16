const sortedString = function(string) {
    return string
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

const isAnagram = function(a, b) {
    return sortedString(a) == sortedString(b);
}

module.exports = isAnagram;