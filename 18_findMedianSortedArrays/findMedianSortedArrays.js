const findMedianSortedArrays = function(array1, array2) {
    let mergedArray = [...array1, ...array2]
    .sort((a, b) => a - b);
    let length = mergedArray.length;

    if (length % 2 == 0)
        return (mergedArray[length / 2] + mergedArray[length / 2 - 1]) / 2;
    else
        return mergedArray[Math.floor(length / 2)];
}

module.exports = findMedianSortedArrays;