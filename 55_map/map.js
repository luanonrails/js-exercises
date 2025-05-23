const map = function(array, fn) {
    const newArray = new Array(array.length);
    for (let i = 0; i < array.length; i++) {
        newArray[i] = fn(array[i], i);
    }
    return newArray;
}

module.exports = map;