// Problem: Find the sum of the digits of a number.
// Example: 1234 => 10

function sumOfDigits(num) {
    let total = 0;
    let number = Math.abs(num);

    while (number > 0) {
        total += number % 10;
        number = Math.floor(number / 10);
    }

    return total;
}

const numbers = [1234, 987, 45, 0];

numbers.forEach((num) => {
    console.log(`${num} => ${sumOfDigits(num)}`);
});

// Output:
// 1234 => 10
// 987 => 24
// 45 => 9
// 0 => 0
