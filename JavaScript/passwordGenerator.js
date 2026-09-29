const { randomInt } = require("node:crypto");

function generatePassword(length = 12) {
    const characterGroups = [
        "abcdefghijklmnopqrstuvwxyz",
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        "0123456789",
        "!@#$%^&*()-_=+",
    ];

    if (!Number.isInteger(length) || length < characterGroups.length) {
        throw new RangeError(`Password length must be an integer of at least ${characterGroups.length}.`);
    }

    const allCharacters = characterGroups.join("");
    const password = characterGroups.map((group) => group[randomInt(group.length)]);

    while (password.length < length) {
        password.push(allCharacters[randomInt(allCharacters.length)]);
    }

    for (let index = password.length - 1; index > 0; index--) {
        const swapIndex = randomInt(index + 1);
        [password[index], password[swapIndex]] = [password[swapIndex], password[index]];
    }

    return password.join("");
}

console.log(generatePassword());