function insertionSort(numbers) {
    const sortedNumbers = [...numbers];

    for (let index = 1; index < sortedNumbers.length; index++) {
        const currentNumber = sortedNumbers[index];
        let previousIndex = index - 1;

        while (previousIndex >= 0 && sortedNumbers[previousIndex] > currentNumber) {
            sortedNumbers[previousIndex + 1] = sortedNumbers[previousIndex];
            previousIndex--;
        }

        sortedNumbers[previousIndex + 1] = currentNumber;
    }

    return sortedNumbers;
}

console.log(insertionSort([5, 1, 4, 2, 8]));

// Time complexity: O(n^2), or O(n) when the array is already sorted
// Space complexity: O(n)
