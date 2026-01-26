//--------- 1 ----------//
const fruits = ["Apple", "Banana", "Cherry"]; //we can mutate const obj but can't change the whole obj
console.log(fruits);

fruits.push("Watermelon"); //the array obj is same here so no error

console.log(fruits);

//anonymous func
let a  = function (a, b) {
    return a + b;
}

console.log(a(5, 4));

// function doubled(item) {
//     return item*2;
// }

// another way -> arrow function
// (item) => {
//     return item*2;
// }
const doubled = (item) => item*2; // we can write like this as it is of one line which is return line
const nums = [1, 2, 3, 4, 5];
const double_nums = nums.map(doubled); //it takes the function and make the arr according the func

console.log(double_nums);
console.log(nums);

// --------- filter, find, for each func learn ------------ //


//JS object ----- 2 --------- //
const student = {
    "name": "Rohan",
    "roll": 99,
}

console.log(student);
console.log(student["name"]);
console.log(student.roll);

student.roll = 122;

console.log(student);

delete student.roll;

console.log(student);

// -------------- 4 ------------- //

//console.log(document);

// const h1 = document.getElementById("heading");
// const h1 = document.getElementsByClassName(".hd");
const h1 = document.querySelector("#heading");
// const h1 = document.querySelectorAll(".hd");
console.log(h1.textContent); //the text content in the tag

// h1.textContent = "Hello"; //source code has JS but when we load browser it will show Hello as it will be manipulated in DOM. 

// h1.innerHTML = "<h1>Python</h1>";



// ------------ 6 event listener ------------ //
//we can modify and change content in browser using js
const btn_el = document.querySelector("#btn");
console.log(btn_el);

btn_el.addEventListener("click", (e) => {
    // console.log("Cliked");
    h1.textContent = "Python!!!"; //change in html text
    h1.style.color = "tomato"; //change in css
    console.log(e); //event 
});

// increament, decreament number change button practice


// 7 setTimeout(), setInterval()
const hl = () => {
    console.log("Hello");
}

const val = setTimeout(hl, 2000); //run after 2 secs once
console.log(val);
clearTimeout(val); //cancelled timeout
// setInterval(hl, 2000); //runs after every 2 secs

console.log("Nice!!"); //this will run fast, prev code will run on other thread

// -------- debouncing (self study) ---------- //