// Problem: Find the first non-repeating character in a string.
// Example: "swiss" => "w"

function firstUniqueCharacter(str) {
    const characterCounts = {};

    for (const char of str) {
        characterCounts[char] = (characterCounts[char] || 0) + 1;
    }

    for (const char of str) {
        if (characterCounts[char] === 1) {
            return char;
        }
    }

    return null;
}

const input = 'swiss';
console.log('First unique character:', firstUniqueCharacter(input));

// Output: w
