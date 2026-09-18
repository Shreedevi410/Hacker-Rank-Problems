// Problem: Flatten a nested array into a single-level array.
// Example: [1, [2, [3, 4], 5], 6] => [1, 2, 3, 4, 5, 6]

function flattenArray(arr) {
    const result = [];

    for (const item of arr) {
        if (Array.isArray(item)) {
            result.push(...flattenArray(item));
        } else {
            result.push(item);
        }
    }

    return result;
}

const input = [1, [2, [3, 4], 5], 6, [7, 8]];
console.log('Flattened array:', flattenArray(input));

// Output: [1, 2, 3, 4, 5, 6, 7, 8]
