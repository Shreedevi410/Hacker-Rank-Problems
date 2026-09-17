// Coding interview question: Find the length of the longest substring without repeating characters

function lengthOfLongestSubstring(str) {
    let left = 0;
    let maxLength = 0;
    const seen = new Map();

    for (let right = 0; right < str.length; right++) {
        const currentChar = str[right];

        if (seen.has(currentChar) && seen.get(currentChar) >= left) {
            left = seen.get(currentChar) + 1;
        }

        seen.set(currentChar, right);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
// Output: 3

console.log(lengthOfLongestSubstring("bbbbb"));
// Output: 1

console.log(lengthOfLongestSubstring("pwwkew"));
// Output: 3

// Explanation:
// Use a sliding window and a map to track the last seen index of each character.
