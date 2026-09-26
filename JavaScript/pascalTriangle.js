// Problem: Generate the first n rows of Pascal's triangle.
// Example: 4 => [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]

function generatePascalTriangle(rowCount) {
    if (!Number.isInteger(rowCount) || rowCount < 0) {
        throw new Error('Row count must be a non-negative integer.');
    }

    const triangle = [];

    for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
        const row = Array(rowIndex + 1).fill(1);

        for (let column = 1; column < rowIndex; column++) {
            row[column] = triangle[rowIndex - 1][column - 1] + triangle[rowIndex - 1][column];
        }

        triangle.push(row);
    }

    return triangle;
}

console.log(generatePascalTriangle(4));

// Time complexity: O(n^2)
// Space complexity: O(n^2)