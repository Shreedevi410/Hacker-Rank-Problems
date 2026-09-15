// HackerRank-style interview question: Count the occurrences of each character in a string

function countCharacters(str) {
    const result = {};

    for (const char of str) {
        result[char] = (result[char] || 0) + 1;
    }

    return result;
}

console.log(countCharacters("javascript"));
// Output: { j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }

// Explanation:
// This question is common in interview rounds because it tests string iteration and object handling.
