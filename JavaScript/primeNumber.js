function isprime(num) {
    // Prime numbers are natural numbers greater than 1.
    if (num <= 1) {
        return false;
    }

    // 2 is the only even prime number.
    if (num === 2) {
        return true;
    }

    // If the number is even and greater than 2, it's not prime.
    if (num % 2 === 0) {
        return false;
    }

    // Check for divisibility from 3 up to the square root of the number.
    // We can skip even numbers by incrementing by 2.
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        // If the number is divisible by i, it's not prime.
        if (num % i === 0) {
            return false;
        }
    }
    // If no divisors are found, the number is prime.
    return true;
}