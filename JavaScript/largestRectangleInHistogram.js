// Find the largest rectangle that fits under the histogram bars.
function largestRectangleArea(heights) {
    const increasingBars = [];
    let largestArea = 0;

    for (let index = 0; index <= heights.length; index++) {
        const currentHeight = index === heights.length ? 0 : heights[index];

        while (
            increasingBars.length > 0 &&
            heights[increasingBars[increasingBars.length - 1]] > currentHeight
        ) {
            const height = heights[increasingBars.pop()];
            const previousSmallerIndex = increasingBars.length > 0
                ? increasingBars[increasingBars.length - 1]
                : -1;
            const width = index - previousSmallerIndex - 1;
            largestArea = Math.max(largestArea, height * width);
        }

        increasingBars.push(index);
    }

    return largestArea;
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
// Output: 10
// Time complexity: O(n); space complexity: O(n).
