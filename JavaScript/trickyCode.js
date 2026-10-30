// Tricky JavaScript questions - practice examples

console.log('1) Hoisting with var');
console.log(message); // undefined
var message = 'Hello from hoisting';
console.log(message);

console.log('\n2) Closure with var in loop');
const funcs = [];
for (var i = 0; i < 3; i++) {
  funcs.push(function () {
    console.log(i);
  });
}
funcs.forEach((fn) => fn());

console.log('\n3) Closure with let in loop');
const funcsWithLet = [];
for (let j = 0; j < 3; j++) {
  funcsWithLet.push(function () {
    console.log(j);
  });
}
funcsWithLet.forEach((fn) => fn());

console.log('\n4) this inside object method vs arrow function');
const person = {
  name: 'Alice',
  normal() {
    console.log('normal:', this.name);
  },
  arrow: () => {
    console.log('arrow:', this.name);
  },
};

person.normal();
person.arrow();

console.log('\n5) == vs ===');
console.log('1 == "1" ->', 1 == '1');
console.log('1 === "1" ->', 1 === '1');
console.log('null == undefined ->', null == undefined);
console.log('null === undefined ->', null === undefined);

console.log('\n6) Async order with setTimeout');
console.log('Start');
setTimeout(() => console.log('Timeout 1'), 0);
Promise.resolve().then(() => console.log('Promise 1'));
console.log('End');

console.log('\n7) Array reference issue');
const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2.push(4);
console.log('arr1:', arr1);
console.log('arr2:', arr2);

console.log('\n8) Shallow copy vs deep copy');
const original = { user: { name: 'Bob' } };
const shallow = { ...original };
shallow.user.name = 'Charlie';
console.log('original.user.name:', original.user.name);
console.log('shallow.user.name:', shallow.user.name);

console.log('\n9) Function hoisting');
console.log(add(5, 3));
function add(a, b) {
  return a + b;
}

console.log('\n10) Default parameter');
function greet(name = 'Guest') {
  console.log('Hello, ' + name);
}
greet();
greet('Sam');
