// Problem: Reverse a string.
// Example: "hello" => "olleh"

function reverseString(str) {
    return str.split('').reverse().join('');
}

const input = 'hello';
console.log('Reversed string:', reverseString(input));

// Output: olleh
