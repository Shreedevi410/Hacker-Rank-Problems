// Problem: Find the second largest distinct number in an array.
// Example: [10, 5, 8, 10, 3] => 8

function findSecondLargest(numbers) {
    const distinctNumbers = [...new Set(numbers)].sort((a, b) => b - a);

    if (distinctNumbers.length < 2) {
        return null;
    }

    return distinctNumbers[1];
}

const input = [10, 5, 8, 10, 3];
console.log('Second largest number:', findSecondLargest(input));

// Output: 8