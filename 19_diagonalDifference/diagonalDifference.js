const diagonalDifference = function(matrix) {

    let sumPrimaryDiagonal = 0;
    let sumSecondaryDiagonal  = 0;

    for (let i = 0; i < matrix.length; i ++) {
        sumPrimaryDiagonal += matrix[i][i];
        sumSecondaryDiagonal += matrix[i][matrix.length - 1 - i];
    }

    return Math.abs(sumPrimaryDiagonal - sumSecondaryDiagonal);
}

module.exports = diagonalDifference;