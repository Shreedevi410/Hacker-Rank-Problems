//Write a Program to reverse a string in JavaScript.

function reverseString(str) 
{
  return str.split("").reverse().join("");
}

console.log(reverseString("GeeksForGeeks"));

//Write a Program to check whether a string is a palindrome string.

function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}

console.log(isPalindrome("GFG"));

//Find the largest number in an array in JavaScript.

function findLargest(arr) {
    //Suppose first element is the largest
    let largest = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            // Update the largest if a bigger element is found
            largest = arr[i]; 
        }
    }
    return largest;
}

console.log(findLargest([99, 5, 3, 100, 1]));

//Using the spread operator (...) or Math.max:

function findLargest(arr) {
    // Math.max() is used to find the largest number
    return Math.max(...arr); 
}

console.log(findLargest([99, 5, 3, 100, 1]));

//How Remove the first element from an array in JavaScript

// Initialize an array
let arr = [5, 6, 7];
arr = arr.slice(1); 
// Create a new array without the first element
console.log(arr);

//Write a Program to use a callback function?

function greet(name, callback) {
    callback(`Hello, ${name}!`);
}
greet('Geek', message => console.log(message));

//Write a Program to find a sum of an array

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumArray([15, 6, 10, 2]));