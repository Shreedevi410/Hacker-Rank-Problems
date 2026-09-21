// Problem: Find the longest word in a sentence.
// Example: "JavaScript makes coding interesting" => "JavaScript"

function longestWord(sentence) {
    const words = sentence.match(/[a-z0-9]+/gi) || [];
    let longest = '';

    for (const word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}

const input = 'JavaScript makes coding interesting';
console.log('Longest word:', longestWord(input));

// Output: JavaScript
