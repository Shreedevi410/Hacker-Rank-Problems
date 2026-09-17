// Coding interview question: Find the first non-repeating character in a string

function firstNonRepeatingChar(str) {
    const counts = {};

    for (const char of str) {
        counts[char] = (counts[char] || 0) + 1;
    }

    for (const char of str) {
        if (counts[char] === 1) {
            return char;
        }
    }

    return null;
}

console.log(firstNonRepeatingChar("aabbcde"));
// Output: "c"

console.log(firstNonRepeatingChar("abcabc"));
// Output: null

// Explanation:
// Count each character, then return the first one with a frequency of 1.
