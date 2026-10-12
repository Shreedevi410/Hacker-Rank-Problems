// Problem: Find the largest of three numbers.
// Example: 12, 45, 7 => 45

function maxOfThree(a, b, c) {
    return Math.max(a, b, c);
}

const numbers = [12, 45, 7, 89, 23, 56];

for (let i = 0; i < numbers.length - 2; i += 3) {
    const first = numbers[i];
    const second = numbers[i + 1];
    const third = numbers[i + 2];

    console.log(`${first}, ${second}, ${third} => ${maxOfThree(first, second, third)}`);
}

// Output:
// 12, 45, 7 => 45
// 89, 23, 56 => 89
