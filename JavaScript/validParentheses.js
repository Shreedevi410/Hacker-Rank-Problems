// Coding interview question: Check whether a string has valid parentheses balance

function isValidParentheses(str) {
    const stack = [];
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const char of str) {
        if (['(', '{', '['].includes(char)) {
            stack.push(char);
        } else if (pairs[char]) {
            if (stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isValidParentheses('(){}[]'));
// Output: true

console.log(isValidParentheses('([)]'));
// Output: false

// Explanation:
// Use a stack to match each closing bracket with the most recent opening bracket.
