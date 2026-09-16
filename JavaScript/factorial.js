// Coding interview question: Find the factorial of a number

function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers";
    }

    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(5));
// Output: 120

console.log(factorial(0));
// Output: 1

// Explanation:
// Multiply all integers from 1 to n to compute the factorial.
