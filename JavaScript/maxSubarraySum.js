// HackerRank-style interview question: Find the maximum subarray sum

function maxSubarraySum(arr) {
    let currentMax = arr[0];
    let globalMax = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currentMax = Math.max(arr[i], currentMax + arr[i]);
        globalMax = Math.max(globalMax, currentMax);
    }

    return globalMax;
}

console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// Output: 6

// Explanation:
// This is a classical interview question testing Kadane's algorithm.
