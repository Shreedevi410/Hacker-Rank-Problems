// HackerRank-style interview question: Find the duplicate number in an array

function findDuplicateNumber(arr) {
    const seen = new Set();

    for (const num of arr) {
        if (seen.has(num)) {
            return num;
        }
        seen.add(num);
    }

    return null;
}

console.log(findDuplicateNumber([1, 2, 3, 4, 2, 5]));
// Output: 2

// Explanation:
// This is a common interview problem to test hash set usage and duplicate detection.
