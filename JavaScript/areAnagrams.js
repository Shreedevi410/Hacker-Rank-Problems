// Problem: Check whether two strings are anagrams.
// Example: "listen" and "silent" => true

function areAnagrams(firstString, secondString) {
    const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');

    return normalize(firstString) === normalize(secondString);
}

const firstString = 'listen';
const secondString = 'silent';

console.log('Are anagrams:', areAnagrams(firstString, secondString));

// Output: true
