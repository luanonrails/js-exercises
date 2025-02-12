const wordPattern = function(pattern, s) {
    const removeDuplicates = (array) => array.filter(
        (e, index) => array.indexOf(e) == index
    );

    const letters = removeDuplicates(pattern.split(''));
    const words = removeDuplicates(s.split(' '));
    const wordMap = {};

    letters.forEach((l, index) => {
        wordMap[l] = words[index];
    });

    const newString = pattern
    .split('')
    .map(l => wordMap[l])
    .join(' ');

    return newString == s;
}

module.exports = wordPattern;