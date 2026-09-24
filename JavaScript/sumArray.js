// Problem: Find the sum of numbers in an array.
// Example: [1, 2, 3, 4] => 10

function sumArray(arr) {
    return arr.reduce((total, num) => total + num, 0);
}

const input = [1, 2, 3, 4, 5];
console.log('Array sum:', sumArray(input));

// Output: 15
