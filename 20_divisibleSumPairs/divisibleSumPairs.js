const divisibleSumPairs = function(n, array) {
    let pairs = 0;

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if ((array[i] + array[j]) % n == 0)
                pairs++
        }
    }

    return pairs;
}

module.exports = divisibleSumPairs;