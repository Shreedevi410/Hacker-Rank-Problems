// Problem: Find the maximum number of consecutive 1s in a binary array.
// Example: [1, 1, 0, 1, 1, 1] -> 3

function findMaxConsecutiveOnes(nums) {
    let maxCount = 0;
    let currentCount = 0;

    for (const num of nums) {
        if (num === 1) {
            currentCount++;
            maxCount = Math.max(maxCount, currentCount);
        } else {
            currentCount = 0;
        }
    }

    return maxCount;
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 3
console.log(findMaxConsecutiveOnes([0, 0, 0])); // 0

// Time complexity: O(n)
// Space complexity: O(1)
