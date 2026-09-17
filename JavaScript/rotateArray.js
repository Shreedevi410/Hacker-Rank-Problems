// Coding interview question: Rotate an array to the right by k positions

function rotateArray(arr, k) {
    if (!arr.length) {
        return arr;
    }

    const steps = k % arr.length;
    const rotated = arr.slice(-steps);

    if (steps === 0) {
        return arr;
    }

    return [...rotated, ...arr.slice(0, arr.length - steps)];
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
// Output: [5, 6, 7, 1, 2, 3, 4]

console.log(rotateArray([1, 2, 3, 4, 5], 2));
// Output: [4, 5, 1, 2, 3]

// Explanation:
// Move the last k elements to the front while preserving order of the remaining elements.
