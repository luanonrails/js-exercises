const binaryGap = function(n) {
    const binary = n.toString(2);
    const pos = [];
    let longest = 0;
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] == 1) {
            pos.push(i);
            if (pos.length == 2) {
                longest = Math.max(longest, pos[1] - pos[0]);
                pos.shift();
            }
        }
    }
    return longest;
}

module.exports = binaryGap;