// Problem: Check whether a number is even or odd.
// Example: 7 => "Odd"

function evenOdd(num) {
    return num % 2 === 0 ? 'Even' : 'Odd';
}

const input = 7;
console.log('Number is:', evenOdd(input));

// Output: Odd
