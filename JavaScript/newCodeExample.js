const numbers = [10, 20, 30, 40, 50];

const total = numbers.reduce((sum, num) => sum + num, 0);
const average = total / numbers.length;

console.log('Numbers:', numbers);
console.log('Total:', total);
console.log('Average:', average);
