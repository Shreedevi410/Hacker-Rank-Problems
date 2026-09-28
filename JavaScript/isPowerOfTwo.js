// Problem: Check whether a number is a power of two.
// Example: 8 -> true, 10 -> false

function isPowerOfTwo(number) {
    if (number <= 0) {
        return false;
    }

    return (number & (number - 1)) === 0;
}

console.log(isPowerOfTwo(8));  // true
console.log(isPowerOfTwo(10)); // false
console.log(isPowerOfTwo(1));  // true

// Time complexity: O(1)
// Space complexity: O(1)
