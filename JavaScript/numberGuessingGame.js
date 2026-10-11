const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

console.log("Welcome to the Number Guessing Game!");
console.log("Guess a number between 1 and 100.");

function askGuess() {
    rl.question("Enter your guess: ", (input) => {
        const guess = Number(input);
        attempts += 1;

        if (Number.isNaN(guess)) {
            console.log("Please enter a valid number.");
            return askGuess();
        }

        if (guess < targetNumber) {
            console.log("Too low! Try again.");
            return askGuess();
        }

        if (guess > targetNumber) {
            console.log("Too high! Try again.");
            return askGuess();
        }

        console.log(`Correct! You guessed the number in ${attempts} attempt(s).`);
        rl.close();
    });
}

askGuess();
