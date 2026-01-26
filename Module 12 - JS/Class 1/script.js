// ----------- Syntax -----------------//
//for printing...
//semicolon is optional
console.log("Hello World!");
console.log("Test print!!!");
// we can use it for debugging
console.error("This is wrong!!");

// ------------- Data types, let, var, const -------------- //
var a = 5; //used with scope -> old way
a = 10;
console.log(a);

// ES6 - > we'll use let and const mostly (new way)
let b = 7;
b = "Nice"; //dynamically typed
console.log(b);
console.log(typeof b);

const c = 9;
console.log(c); //this value is constant

//c = 10; -> will throw error

let d = "Rohan";
console.log(typeof d);

let bool = true;
console.log(typeof bool);

let none;
let none2 = null;
console.log(typeof none);
console.log(typeof none2);

// ----------- Operators ------------ //
let f = "7";
let g = 7;
console.log(f+g);

console.log(f == g); //checked loosely -> somehow is it matched
console.log(f === g); //strictly checked -> value, type both have to be matched

console.log(f != g);
console.log(f !== g);

console.log(true || false);
console.log(true && false);

// --------- Conditionals ------------ //
let w = 20;
let x = 10;

if(w == x) {
    console.log("Hello!!!");
} else if (w > x) {
    console.log("Nice!!!");
}

const day = "Hi";
switch(day) {
    case "Friday":
        console.log("Holiday");
        break;
    case "Saturday":
        console.log("Varsity from tomorrow!!!");
        break;
    case "Sunday":
        console.log("First day of the week in varsity!!!");
        break;
    default:
        console.log("Invalid day!!");
}

// ------------ Loops --------------- //
let cnt = 1;
while(cnt !== 10) {
    console.log(cnt);
    cnt++;
}

for (let index = 0; index <= 5; index++) {
    console.log(index);
}

for (let index = 0; index < 5; index++, console.log(index)); //one liner for loop

// ------------- Functions -------------- //
function printnums(num) {
    for(let idx = 0; idx < num; idx++, console.log(idx));
}

printnums(10);

function show_name(name) {
    console.log(`Hello ${name}.`);
    return "Done!";
}

let res = show_name("Rohan");
console.log(res);