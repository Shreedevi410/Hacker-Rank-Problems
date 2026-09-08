// Problem: https://leetcode.com/problems/two-sum/

function twoSum(numbers, target) {
    const seenNumbers = new Map();

    for (let index = 0; index < numbers.length; index++) {
        const complement = target - numbers[index];

        if (seenNumbers.has(complement)) {
            return [seenNumbers.get(complement), index];
        }

        seenNumbers.set(numbers[index], index);
    }

    return [];
}

console.log(twoSum([2, 7, 11, 15], 9));

// Time complexity: O(n)
// Space complexity: O(n)