const generate = function(numRows) {
    const triangle = [[1]];
    for (let i = 0; i < numRows - 1; i++) {
        const row = [];
        for (let j = 0; j < triangle[i].length - 1; j++) {
            const num = triangle[i][j] + triangle[i][j + 1];
            row.push(num);
        }
        row.unshift(1);
        row.push(1);
        triangle.push(row);
    }
    return triangle;
}

module.exports = generate;