function bubbleSort(numbers) {
    const sortedNumbers = [...numbers];

    for (let end = sortedNumbers.length - 1; end > 0; end--) {
        let swapped = false;

        for (let index = 0; index < end; index++) {
            if (sortedNumbers[index] > sortedNumbers[index + 1]) {
                [sortedNumbers[index], sortedNumbers[index + 1]] = [
                    sortedNumbers[index + 1],
                    sortedNumbers[index],
                ];
                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }
    }

    return sortedNumbers;
}

console.log(bubbleSort([5, 1, 4, 2, 8]));

// Time complexity: O(n^2), or O(n) when the array is already sorted
// Space complexity: O(n)
