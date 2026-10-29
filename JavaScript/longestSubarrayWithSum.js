// Find the longest contiguous subarray whose sum equals the target.
function longestSubarrayWithSum(numbers, target) {
    const firstIndexByPrefixSum = new Map([[0, -1]]);
    let prefixSum = 0;
    let bestStart = -1;
    let bestEnd = -1;

    for (let index = 0; index < numbers.length; index++) {
        prefixSum += numbers[index];
        const matchingPrefixIndex = firstIndexByPrefixSum.get(prefixSum - target);

        if (matchingPrefixIndex !== undefined && index - matchingPrefixIndex > bestEnd - bestStart) {
            bestStart = matchingPrefixIndex + 1;
            bestEnd = index;
        }

        // Keep the earliest index so a matching range can be as long as possible.
        if (!firstIndexByPrefixSum.has(prefixSum)) {
            firstIndexByPrefixSum.set(prefixSum, index);
        }
    }

    if (bestStart === -1) {
        return null;
    }

    return {
        start: bestStart,
        end: bestEnd,
        length: bestEnd - bestStart + 1,
        subarray: numbers.slice(bestStart, bestEnd + 1),
    };
}

console.log(longestSubarrayWithSum([1, -1, 5, -2, 3], 3));
// Output: { start: 0, end: 3, length: 4, subarray: [1, -1, 5, -2] }
