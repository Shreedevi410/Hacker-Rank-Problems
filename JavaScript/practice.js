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

//functional block
function outer() {
    let outerVar = "I'm in the outer scope!";

    function inner() {
        console.log(outerVar);
    }
    return inner;
}

const closure = outer();

closure();
closure();