const removeFromArray = function(array, ...elements) {
    return array.filter((item) => !elements.includes(item));
}

module.exports = removeFromArray;