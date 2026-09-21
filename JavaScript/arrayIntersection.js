// Problem: Find the common values between two arrays without duplicates.
// Example: [1, 2, 3, 4] and [3, 4, 5, 6] => [3, 4]

function arrayIntersection(firstArray, secondArray) {
    const secondSet = new Set(secondArray);
    const commonValues = new Set();

    for (const value of firstArray) {
        if (secondSet.has(value)) {
            commonValues.add(value);
        }
    }

    return [...commonValues];
}

const firstArray = [1, 2, 3, 4, 4];
const secondArray = [3, 4, 5, 6];

console.log('Common values:', arrayIntersection(firstArray, secondArray));

// Output: [3, 4]
