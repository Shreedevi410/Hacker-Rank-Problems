function selectionSort(numbers) {
    const sortedNumbers = [...numbers];

    for (let index = 0; index < sortedNumbers.length - 1; index++) {
        let smallestIndex = index;

        for (let nextIndex = index + 1; nextIndex < sortedNumbers.length; nextIndex++) {
            if (sortedNumbers[nextIndex] < sortedNumbers[smallestIndex]) {
                smallestIndex = nextIndex;
            }
        }

        [sortedNumbers[index], sortedNumbers[smallestIndex]] = [
            sortedNumbers[smallestIndex],
            sortedNumbers[index],
        ];
    }

    return sortedNumbers;
}

console.log(selectionSort([5, 1, 4, 2, 8]));

// Time complexity: O(n^2)
// Space complexity: O(n)
