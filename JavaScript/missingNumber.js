// HackerRank-style interview question: Find the missing number in a range

function findMissingNumber(arr, n) {
    const total = (n * (n + 1)) / 2;
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return total - sum;
}

console.log(findMissingNumber([1, 2, 4, 5, 6], 6));
// Output: 3

// Explanation:
// This tests arithmetic reasoning and the sum-of-first-n-numbers trick.
