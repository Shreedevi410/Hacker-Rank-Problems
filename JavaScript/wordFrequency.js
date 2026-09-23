// Problem: Count how often each word appears in a sentence.
// Example: "code learn code" => { code: 2, learn: 1 }

function wordFrequency(sentence) {
    const frequency = {};
    const words = sentence.toLowerCase().split(/\s+/).filter(Boolean);

    for (const word of words) {
        frequency[word] = (frequency[word] || 0) + 1;
    }

    return frequency;
}

const input = 'code learn code';
console.log('Word frequency:', wordFrequency(input));

// Output: { code: 2, learn: 1 }