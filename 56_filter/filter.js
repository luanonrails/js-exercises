const filter = function(array, fn) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i], i)) newArray.push(array[i]);
    }

    return newArray;
}

module.exports = filter;