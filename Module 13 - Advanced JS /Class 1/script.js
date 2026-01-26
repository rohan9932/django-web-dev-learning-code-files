// ---------- template literal --------------- //
const myName = "Rohan";

const intro = `Hello, My name is ${myName}.`;

console.log(intro);


// ----------- object distructuring ----------- //
const student = {
    name: "Rohan",
    roll: 122,
    age: 21,
};

console.log(student);

const {name:st_name, roll} = student; //takes out a copy of name and roll from student
console.log(st_name);
console.log(roll);

// ------------ array distructuring -------------- //
const fruits = ["Apple", "Banana"];
console.log(fruits);

//just will add fruit items according the variables. 
//2 variables here so first 2 values are picked
const [fruit_a, fruit_b] = fruits;
console.log(fruit_a);
console.log(fruit_b);


// -------------- Spread Operator ---------------- //
// in short it's whole array distructuring
//...fruit will just represent everything (comma, string) except the brackets
//like here is "Apple", "Banana"

// ---- for changing obj/arr immutabily we can use spread operator

console.log("Apple", "Banana");
console.log(...fruits);

const more_fruits = [...fruits, "Guava", "Watermelon"];
console.log(...more_fruits);

//obj spread
const student2 = {
    ...student,
    roll: 143, //roll will be updated as it is written last
    department: "CSE",
};
console.log(student2);


// ---------------- Rest Operator ----------------- //
//takes all the rest of the fruits after "Apple" and "Banana"
const [fruitA, fruitB, ...otherFruits] = more_fruits;
console.log(otherFruits);

const {name:stName, ...otherInfo} = student;
console.log(otherInfo);


// ----------------- Promise ----------------------- //

// -------- need to learn async, await ------------- //

// const orderFood = new Promise((resolve, reject) => {
//     const isShopOpen = true;
//     if(isShopOpen) {
//         resolve("Food Delivered!"); //success
//     } else {
//         reject("Shop Closed!"); //fail
//     }
// });

// orderFood.then((result) => console.log(result)).catch((result) => console.log(result));


function fetchOrder(id) {
    return new Promise((resolve, reject) => {
        //callback function as it is called inside setTimeOut()
        setTimeout(() => {
            if(id == 1) {
                resolve("Shirt");
            }
            else { 
                reject("No order Found!");
            }
        }, 500);
    })
}

const order = fetchOrder(2);
order.then((result) => console.log(result));


// --------------- closures ------------------------ //
function makeCounter() {
    let count = 1;

    return function() {
        count += 1;
        console.log(count);
    };
}

const counter = makeCounter();
//here the function will hold back the count variable though it shouldv'e been removed
//as the returned function holds the count variable.....
counter();
counter();
counter();