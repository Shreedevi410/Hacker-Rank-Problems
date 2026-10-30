// Small tricky JavaScript code

console.log('1) var hoisting:', typeof value);
var value = 10;
console.log('2) value:', value);

console.log('3) TDZ example:');
try {
  console.log('Accessing let before declaration:', temp);
} catch (error) {
  console.log('Caught:', error.message);
}
let temp = 20;

console.log('4) Closure with var in loop');
const funcs = [];
for (var i = 0; i < 3; i++) {
  funcs.push(() => console.log(i));
}
funcs.forEach((fn) => fn());
