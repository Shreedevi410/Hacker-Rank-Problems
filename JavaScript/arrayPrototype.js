Array.prototype.myMap = function(callback) {
  const result = [];
  // 'this' refers to the array the method is called on
  for (let i = 0; i < this.length; i++) {
    // Only process elements that exist in the array
    if (this.hasOwnProperty(i)) {
      result.push(callback(this[i], i, this));
    }
  }
  return result;
};

// Example Usage:
const nums = [1, 2, 3];
console.log(nums.myMap(x => x * 2)); // Output: [2, 4, 6]