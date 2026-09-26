// Problem: Swap the rows and columns of a matrix.
// Example: [[1, 2, 3], [4, 5, 6]] => [[1, 4], [2, 5], [3, 6]]

function transposeMatrix(matrix) {
    if (matrix.length === 0) {
        return [];
    }

    const transposed = [];

    for (let column = 0; column < matrix[0].length; column++) {
        const row = [];

        for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
            row.push(matrix[rowIndex][column]);
        }

        transposed.push(row);
    }

    return transposed;
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
];

console.log(transposeMatrix(matrix));

// Time complexity: O(rows * columns)
// Space complexity: O(rows * columns)