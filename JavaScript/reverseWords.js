// Problem: Reverse the order of words in a sentence.
// Example: "I love JavaScript" => "JavaScript love I"

function reverseWords(sentence) {
    return sentence.trim().split(/\s+/).reverse().join(' ');
}

const input = 'I love JavaScript';
console.log('Reversed sentence:', reverseWords(input));

// Output: JavaScript love I
