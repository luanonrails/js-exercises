const intToRoman = function(int) {
    let res = '';
    const symbols = {
        M: 1000, CM: 900, D: 500, CD: 400,
        C: 100, XC: 90, L: 50, XL: 40,
        X: 10, IX: 9, V: 5, IV: 4, I: 1,
    };

    for (const s in symbols) {
        while (symbols[s] <= int) {
            res += s;
            int -= symbols[s];
        }
    }
    return res;
}

module.exports = intToRoman;