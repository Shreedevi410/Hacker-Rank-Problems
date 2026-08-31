function mergeAndRemoveDuplicates(originalArray, newArray) {
    // Use the spread operator to combine the elements of both arrays.
    const mergedArray = [...originalArray, ...newArray];

    // A Set can only hold unique values. We use it to automatically remove duplicates.
    const uniqueElements = new Set(mergedArray);

    // Convert the Set back into a new array using the spread operator.
    return [...uniqueElements];
}