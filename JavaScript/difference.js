function findMaxDifference(arr) { 
   // Check if the array has at least two elements. 
   if (arr.length < 2) {
       return 0; 
    } 
   // Initialize both min and max values with the first element of the array. 
   let minVal = arr[0];
   let maxVal = arr[0];
   // Iterate through the array starting from the second element in a single pass. 
   for (let i = 1; i < arr.length; i++) { 
      // Check if the current element is smaller than the current minimum value. 
      if (arr[i] < minVal) {
         minVal = arr[i];
      } else if (arr[i] > maxVal) {
           maxVal = arr[i]; }
   } 
   // The result is the difference between the maximum and minimum values found. 
   return maxVal - minVal;
}