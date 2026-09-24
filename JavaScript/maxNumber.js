// Problem: Find the largest number in an array.
// Example: [3, 8, 1, 6] => 8

function maxNumber(arr) {
    return Math.max(...arr);
}

const input = [3, 8, 1, 6, 10, 2];
console.log('Maximum number:', maxNumber(input));

// Output: 10
