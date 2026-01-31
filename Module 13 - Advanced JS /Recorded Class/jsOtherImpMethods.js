//reduce -> performs a operation on each element and reduces the value and returns the final value
// array.reduce((accumulator, currentValue)=>{
//     return updatedValue;
// }, initialvalue);

const nums = [10, 20, 30, 40, 50];
const total = nums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
} , 0);

console.log(total);

const max = nums.reduce((acc, currVal)=>{
    return acc > currVal ? acc: currVal;
}, nums[0]);

console.log(max);

const numbers = [...Array(6).keys()];
numbers.shift();

const fact = numbers.reduce((acc, currVal)=>{
    return acc*currVal;
}, 1);

console.log(fact);


const cart = [
    {product: 'shirt', price: 500},
    {product: 'pant', price: 900},
    {product: 'shoe', price: 1200},
];

const totalPrice = cart.reduce((acc, currVal)=>{
    return acc + currVal.price;
}, 0);

console.log(totalPrice);



//map -> Does some work on each element and stores them in a new array and returns the array at last
const sqNums = nums.map((num, index)=>{ //important for reactJS
    return num*num;
});
console.log(sqNums);


//optional chaining
const user = {
    name: "Rohan",
    // address: {
    //     city: "Dhaka",
    //     zip: 1207,
    // }
};

// console.log(user.address.city); //normal way
console.log(user?.address?.city); //optional chaining -> will return undefined instead of error


//nullish coalescing
let a;

//it first try to store a. if it's null/undefined then it'll store the second value after ??
let result = a??"Not defined yet!"; 
console.log(result);

/*
| Value        | Boolean Result | Notes                    |
|-------------|----------------|--------------------------|
| false       | false          | boolean false            |
| 0           | false          | number zero              |
| -0          | false          | negative zero            |
| 0n          | false          | BigInt zero              |
| ""          | false          | empty string             |
| null        | false          | null value               |
| undefined   | false          | undefined value          |
| NaN         | false          | Not a Number             |
|-------------|----------------|--------------------------|
| true        | true           | boolean true             |
| 1           | true           | non-zero number          |
| -1          | true           | non-zero number          |
| "0"         | true           | non-empty string         |
| "false"    | true           | string, not boolean      |
| []          | true           | empty array              |
| {}          | true           | empty object             |
| function(){}| true           | function object          |
| Infinity    | true           | special number           |
*/