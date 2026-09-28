// Problem: Check if two strings are anagrams.
// Example: "listen" and "silent" -> true

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const frequency = {};

    for (const char of str1) {
        frequency[char] = (frequency[char] || 0) + 1;
    }

    for (const char of str2) {
        if (!frequency[char]) {
            return false;
        }
        frequency[char]--;
    }

    return true;
}

console.log(validAnagram('listen', 'silent')); // true
console.log(validAnagram('hello', 'world'));  // false

// Time complexity: O(n)
// Space complexity: O(n)
