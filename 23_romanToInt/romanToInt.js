const romanToInt = function(str) {
    let res = 0;
    const symbols = {
        I: 1, IV: 4, V: 5, IX: 9, X: 10,
        XL: 40, L: 50, XC: 90, C: 100,
        CD: 400, D: 500, CM: 900, M: 1000,
    };
    
    for (const s in symbols) {
        while (str.slice(-1) == s || str.slice(-2) == s) {
            res += symbols[s];
            str = str.replace(s, '');
        }
    }
    return res;
}

module.exports = romanToInt;