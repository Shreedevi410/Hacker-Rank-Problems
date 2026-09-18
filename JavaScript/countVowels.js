// Problem: Count the number of vowels in a string.
// Example: "hello world" => 3

function countVowels(str) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;

    for (const char of str.toLowerCase()) {
        if (vowels.has(char)) {
            count++;
        }
    }

    return count;
}

const input = 'hello world';
console.log('Vowel count:', countVowels(input));

// Output: 3
