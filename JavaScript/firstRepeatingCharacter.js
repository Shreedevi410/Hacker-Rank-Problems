// Problem: Find the first character that repeats in a string.
// Example: "abca" -> "a"

function firstRepeatingCharacter(str) {
    const seen = new Set();

    for (const char of str) {
        if (seen.has(char)) {
            return char;
        }
        seen.add(char);
    }

    return -1;
}

console.log(firstRepeatingCharacter('abca')); // a
console.log(firstRepeatingCharacter('abc'));  // -1

// Time complexity: O(n)
// Space complexity: O(n)
