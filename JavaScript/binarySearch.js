// Problem: https://leetcode.com/problems/binary-search/

function binarySearch(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left <= right) {
        const middle = Math.floor(left + (right - left) / 2);

        if (numbers[middle] === target) {
            return middle;
        }

        if (numbers[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1;
}

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));

// Time complexity: O(log n)
// Space complexity: O(1)
