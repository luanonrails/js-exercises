const convert = function(s, numRows) {
    if (numRows == 1) return s;
    const lines = new Array(numRows).fill('');

    let index = 0;
    let i = 1;

    for (let c of s) {
        lines[index] += c;
        index += i;
        if (index == numRows - 1) i = -1;
        else if (index == 0) i = 1;
    }

    return lines.join('');
}

module.exports = convert;