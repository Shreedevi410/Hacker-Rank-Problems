const numbers = [10, 20, 30, 40, 50];

const total = numbers.reduce((sum, num) => sum + num, 0);
const average = total / numbers.length;

console.log('Numbers:', numbers);
console.log('Total:', total);
console.log('Average:', average);

const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log('Even numbers:', evenNumbers);

// Tricky JavaScript question: closure + var hoisting
console.log('--- Tricky JavaScript Example ---');
console.log(a);
var a = 10;

const funcs = [];
for (var i = 0; i < 3; i++) {
  funcs.push(() => console.log('with var:', i));
}

funcs.forEach((fn) => fn());

const funcsWithLet = [];
for (let j = 0; j < 3; j++) {
  funcsWithLet.push(() => console.log('with let:', j));
}

funcsWithLet.forEach((fn) => fn());
