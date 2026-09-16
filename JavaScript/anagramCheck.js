// Coding interview question: Check whether two strings are anagrams

function areAnagrams(str1, str2) {
    const normalized1 = str1.toLowerCase().replace(/\s+/g, "");
    const normalized2 = str2.toLowerCase().replace(/\s+/g, "");

    if (normalized1.length !== normalized2.length) {
        return false;
    }

    const frequency = {};

    for (const char of normalized1) {
        frequency[char] = (frequency[char] || 0) + 1;
    }

    for (const char of normalized2) {
        if (!frequency[char]) {
            return false;
        }
        frequency[char] -= 1;
    }

    return true;
}

console.log(areAnagrams("listen", "silent"));
// Output: true

console.log(areAnagrams("hello", "world"));
// Output: false

// Explanation:
// This checks whether both strings contain the same characters with the same counts.
