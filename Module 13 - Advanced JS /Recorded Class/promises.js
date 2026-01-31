console.log('Hello World');

//dummy promise

//here we are creating a promise where if the num < 0.5 then it is rejected and catched by .catch()
//and if num > 0.5 then it's executed(resolved) and catched by .then()

//with promise we handle a asyncronous situation where we are promising that a event will get executed in future so we are just taking the next steps according successful execution or failure by reject and resolve.

let prom1 = new Promise((resolve, reject) => {
    let num = Math.random();
    if(num < 0.5) {
        reject("It didn't happen");
    }
    else {
        setTimeout(() => {
            console.log(`Yes it's done!`);
            resolve("Rohan it's done!");
        }, 2000);
    }
});

let prom2 = new Promise((resolve, reject) => {
    let num = Math.random();
    if(num < 0.5) {
        reject("It didn't happen");
    }
    else {
        setTimeout(() => {
            console.log(`Yes it's done! 2`);
            resolve("Rohan it's done! 2");
        }, 2000);
    }
});

// let prom3 = Promise.all([prom1, prom2]); 
let prom3 = Promise.allSettled([prom1, prom2]); 

prom3.then((params) => {
  console.log(params);
}).catch(
    (param)=> {
        console.log(param); //it appears when both the promises resolve
    }
).finally(() => {
  console.log(`This is executed regardless resolve and reject. Used for cleanups we wanna do.`);
}
);


// settled is after promise regardless of reject or resolve
// PENDING
//    |
//    | resolve()
//    v
// FULFILLED   ← settled
//
// PENDING
//    |
//    | reject()
//    v
// REJECTED    ← settled



// ---------- A promise chain is a sequence of .then() calls where each step receives the result of the previous one. ---------- //


let prom4 = new Promise((resolve, reject) => {
    let num = Math.random();
    if(num < 0.5) {
        reject("Request Failed....");
    }
    setTimeout(() => {
        resolve(10);
    }, 1000);
});

//then always returns a promise
prom4
  .then((value) => {
    console.log("Step 1:", value); // 10
    return value * 2; // returns 20 -> here 20 is wrapped with a promise and get returned
  })
  .then((value) => {
    console.log("Step 2:", value); // 20
    return value + 5; // returns 25
  })
  .then((value) => {
    console.log("Step 3:", value); // 25
  })
  .catch((err) => {
    console.log("Error:", err);
  })
  .finally(() => {
    console.log("Chain finished");
  });



// | Area                | What’s Used        |
// | -------- ----------- | ------------------ |
// | Network requests    | Promises           |
// | APIs / SDKs         | Promises           |
// | Business logic      | `async/await`      |
// | Event listeners     | Callbacks          |
// | Streams             | Callbacks / events |
// | Legacy code         | Callbacks          |
// | Framework internals | Both               |


