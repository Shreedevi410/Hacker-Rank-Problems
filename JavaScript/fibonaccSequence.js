function fibonacciSequence(n) {
    // Handle edge cases for n < 2.
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    }

    // Initialize the sequence with the first two numbers.
    const sequence = [0, 1];
    // Use a loop to generate the remaining numbers.
    for (let i = 2; i < n; i++) {
        // Each new number is the sum of the previous two numbers in the sequence.
        const nextNumber = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextNumber);
    }
    // Return the resulting Fibonacci sequence.
    return sequence;
}