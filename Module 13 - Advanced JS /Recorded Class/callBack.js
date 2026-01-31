// Synchronous → “Do this, then this, then this”

// Asynchronous → “Do this, and I’ll handle the result later”

console.log("Hello world!");

setTimeout(() => {
    console.log("Hello from setTimeout"); //for async nature of js it will run last
}, 2000);

console.log("End!");

// CallBack func -> A function that is passed as an argument to another function and is executed later.

function greet(name, callback) {
  console.log("Hello " + name);
  callback(); // calling back the function
}

function sayBye() {
  console.log("Bye!");
}

greet("Alex", sayBye);

// here sayBye() is the callBack function which will be executed after greet finishes it's job.

// But there is a problem..

// setTimeout(() => {
//   console.log("1");
//   setTimeout(() => {
//     console.log("2");
//     setTimeout(() => {
//       console.log("3");
//     }, 1000);
//   }, 1000);
// }, 1000);

//Too many nested callbacks become messy... This is called callback hell or pyramid of doom.