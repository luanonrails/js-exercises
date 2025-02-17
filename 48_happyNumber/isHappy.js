const isHappy = function(n) {
    const sums = [];
    while (true) {
        if (sums[n]) return false;
        else sums[n] = true;
        const digits = n.toString().split('');
        n = 0;
        for (let d of digits) {
            n += d * d;
        }
        if (n == 1) return true;
    }
}

module.exports = isHappy;