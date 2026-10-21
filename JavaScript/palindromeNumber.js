// Check whether a number reads the same forwards and backwards.

function isPalindromeNumber(number) {
    if (!Number.isInteger(number) || number < 0) {
        return false;
    }

    const digits = String(number);
    return digits === digits.split("").reverse().join("");
}

console.log(isPalindromeNumber(121));
// Output: true

console.log(isPalindromeNumber(123));
// Output: false
