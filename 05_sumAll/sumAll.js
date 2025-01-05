const sumAll = function(start, end) {
    if (start < 0 || end < 0) return "ERROR";
    if (!Number.isInteger(start + end)) return "ERROR";
    if (start > end) [start, end] = [end, start];
    let total = 0;
    for (let i = start; i <= end; i++) {
        total += i;
    }
    return total;
}

module.exports = sumAll;