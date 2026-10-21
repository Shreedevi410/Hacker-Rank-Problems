function isPrime(number) {
    if (!Number.isInteger(number) || number < 2) {
        return false;
    }

    for (let divisor = 2; divisor <= Math.sqrt(number); divisor++) {
        if (number % divisor === 0) {
            return false;
        }
    }

    return true;
}

const numbers = [1, 2, 7, 10, 13, 20];

for (const number of numbers) {
    console.log(`${number} is ${isPrime(number) ? "prime" : "not prime"}.`);
}
