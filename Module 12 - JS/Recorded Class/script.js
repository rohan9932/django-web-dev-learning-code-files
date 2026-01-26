// document.writeln("<h1>Hello World!!</h1>"); //write in the html (Dom manipulation)

//functional scope -> var can be reassingned and redeclared
var name = "Rohan";

//block scope -> can reassign but can't redeclared 
let name2 = "Rahim";

//block scope -> can't reassign and redeclared 
const greetings = "Hello World!"; 

//primitive -> number, string, boolean, undefined, null, symbol, bigint

let age = 21;
let isAdult = age >= 18 ? "Adult": "Minor";
console.log(isAdult);

let i = 1;

do {
    console.log(i);
} while(i === 0)

//js object 
let student = {
    name: "Rohan",
    age: 21,
    greet: () => console.log("Hello"),
};

student.greet();

//used in object and array but mainly in object 
for(let key in student) {
    console.log(key + " : " + student[key]);
}

let arr = [1, 2, 3, 4, 5];
//mainly used in array
for(let el of arr) console.log(el);