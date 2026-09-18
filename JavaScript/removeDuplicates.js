// Problem: Remove duplicate values from an array while keeping the first occurrence.
// Example: [1, 2, 2, 3, 1, 4, 3] => [1, 2, 3, 4]

function removeDuplicates(arr) {
    const seen = new Set();
    const result = [];

    for (const item of arr) {
        if (!seen.has(item)) {
            seen.add(item);
            result.push(item);
        }
    }

    return result;
}

const input = [1, 2, 2, 3, 1, 4, 3, 5];
console.log('Unique array:', removeDuplicates(input));

// Output: [1, 2, 3, 4, 5]
