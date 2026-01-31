//hoisting is a feature takes functions and variables declared with var at the top of the script... that's why bottom codes are being executed without any hassle (js engine orders out src code like this)

//let and const also supports hoisting but it'll give reference error

console.log(name);
var name = "Rohan";


hello();
function hello() {
    console.log("Hello World!!");
}

