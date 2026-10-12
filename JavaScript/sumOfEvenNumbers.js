// Problem: Find the sum of even numbers in an array.
// Example: [1, 2, 3, 4, 5, 6] => 12

function sumOfEvenNumbers(arr) {
    return arr.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`Sum of even numbers: ${sumOfEvenNumbers(numbers)}`);

// Output: 30
