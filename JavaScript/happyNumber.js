// Problem: A happy number is a number that reaches 1
// after repeatedly replacing it with the sum of the squares of its digits.
// Example: 19 -> 1^2 + 9^2 = 82 -> 8^2 + 2^2 = 68 -> 6^2 + 8^2 = 100 -> 1

function isHappyNumber(number) {
    let slow = number;
    let fast = number;

    do {
        slow = sumOfSquares(slow);
        fast = sumOfSquares(sumOfSquares(fast));
    } while (slow !== fast);

    return slow === 1;
}

function sumOfSquares(value) {
    let total = 0;

    while (value > 0) {
        const digit = value % 10;
        total += digit * digit;
        value = Math.floor(value / 10);
    }

    return total;
}

console.log(isHappyNumber(19)); // true
console.log(isHappyNumber(4));  // false

// Time complexity: O(log n)
// Space complexity: O(1)
