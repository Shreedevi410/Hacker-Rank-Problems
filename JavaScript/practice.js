let a = 0;

setTimeout(() => {
    a = 1;
    console.log("Timeout:", a);
}, 0);

Promise.resolve().then(() => {
    a = 2;
    console.log("Promise:", a);
});

a = 3;
console.log("Sync:", a);

//microtask and macro task