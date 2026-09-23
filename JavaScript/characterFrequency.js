// Problem: Count how often each character appears in a string.
// Example: "hello" => { h: 1, e: 1, l: 2, o: 1 }

function characterFrequency(str) {
    const frequency = {};

    for (const char of str) {
        frequency[char] = (frequency[char] || 0) + 1;
    }

    return frequency;
}

const input = 'hello';
console.log('Character frequency:', characterFrequency(input));

// Output: { h: 1, e: 1, l: 2, o: 1 }