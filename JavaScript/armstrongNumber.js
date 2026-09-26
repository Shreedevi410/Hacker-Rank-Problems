// Problem: Check whether a number equals the sum of its digits raised
// to the power of the number of digits.
// Example: 153 => 1^3 + 5^3 + 3^3 = 153

function isArmstrongNumber(number) {
    if (!Number.isInteger(number) || number < 0) {
        return false;
    }

    const digits = String(number).split('').map(Number);
    const power = digits.length;
    const sum = digits.reduce((total, digit) => total + digit ** power, 0);

    return sum === number;
}

console.log(isArmstrongNumber(153)); // true
console.log(isArmstrongNumber(123)); // false

// Time complexity: O(d), where d is the number of digits.
// Space complexity: O(d)