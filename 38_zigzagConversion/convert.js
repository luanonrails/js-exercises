const convert = function(s, numRows) {
    if (numRows == 1) return s;
    const lines = Array
    .from({length: numRows})
    .map(l => []);

    let index = 0;
    let i = 1;

    for (let c of s) {
        lines[index].push(c);
        index += i;
        if (index == numRows - 1) i = -1;
        else if (index == 0) i = 1;
    }

    return lines.flat().join('');
}

module.exports = convert;