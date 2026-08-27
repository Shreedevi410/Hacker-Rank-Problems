function plusMinus(arr) {
    const totalCount = arr.length;
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;

    // Loop through the array to categorize and count each number
    for (let i = 0; i < totalCount; i++) {
        if (arr[i] > 0) {
            positiveCount++;
        } else if (arr[i] < 0) {
            negativeCount++;
        } else {
            zeroCount++;
        }
    }

    // Calculate ratios and format them strictly to 6 decimal places
    console.log((positiveCount / totalCount).toFixed(6));
    console.log((negativeCount / totalCount).toFixed(6));
    console.log((zeroCount / totalCount).toFixed(6));
}