function calculate(firstNumber, operator, secondNumber) {
    if (!Number.isFinite(firstNumber) || !Number.isFinite(secondNumber)) {
        throw new TypeError("Both values must be finite numbers.");
    }

    switch (operator) {
        case "+":
            return firstNumber + secondNumber;
        case "-":
            return firstNumber - secondNumber;
        case "*":
            return firstNumber * secondNumber;
        case "/":
            if (secondNumber === 0) {
                throw new RangeError("Cannot divide by zero.");
            }
            return firstNumber / secondNumber;
        default:
            throw new Error(`Unsupported operator: ${operator}`);
    }
}

console.log(`10 + 5 = ${calculate(10, "+", 5)}`);
console.log(`10 - 5 = ${calculate(10, "-", 5)}`);
console.log(`10 * 5 = ${calculate(10, "*", 5)}`);
console.log(`10 / 5 = ${calculate(10, "/", 5)}`);
