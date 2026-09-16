// Coding interview question: Print the first n Fibonacci numbers

function fibonacci(n) {
    if (n <= 0) {
        return [];
    }

    const result = [0];

    if (n === 1) {
        return result;
    }

    let a = 0;
    let b = 1;

    while (result.length < n) {
        result.push(b);
        const next = a + b;
        a = b;
        b = next;
    }

    return result;
}

console.log(fibonacci(8));
// Output: [0, 1, 1, 2, 3, 5, 8, 13]

console.log(fibonacci(1));
// Output: [0]

// Explanation:
// Start with 0 and 1, then repeatedly add the previous two numbers.
