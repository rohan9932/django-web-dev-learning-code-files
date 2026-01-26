const nums = [1, 2, 3, 4, 5, 5];
console.log(nums[2]); 

//array concat()
const nums2 = [6, 7, 8, 9]; 
const result = nums.concat(nums2); //creates another array where both the arrays are concated
console.log(result); 

//array every()
const res = nums.every(num => num > 0);
console.log(res); 

//array filter() 
const res2 = nums.filter(num => num%2 === 0);
console.log(res2);

//array find() -> returns the first item which satisfies the condition
const res3 = nums.find(num => num > 2);
console.log(res3);

const res4 = nums.findIndex(num => num === 3);
console.log(res4);

// from() -> str to array
let str = "Hello";
const res5 = Array.from(str);
console.log(res5);

//includes()
console.log(nums.includes(5)); 

//join()
const nameVar = ["Hello", "World"];
console.log(nameVar.join(" ")); 

//lastIndexof()
console.log(nums.lastIndexOf(5)); 

//pop() and length  
nums.pop();
console.log(nums);
 
console.log(nums.length);


//push()
nums.push(7);
console.log(nums); 

//reverse() and sort()
nums.reverse()
console.log(nums);

nums.sort();
// nums.sort((a, b) => b-a); //descending order
console.log(nums); 

//shift() -> first el remove
let rmved_num = nums.shift();
console.log(rmved_num); 
console.log(nums); 

//slice()
let partial_nums = nums.slice(1, 3); //slice the array and stores it in another location
console.log(partial_nums);

//some()
let num_available = nums.some(num => num > 2);
console.log(num_available);

//splice()
const names = ["Rohan", "Afia", "Misty"];
names.splice(1, 1, "Kashfia"); //stIdx, deleteCnt, item1, item2..... 
console.log(names);

//toString()
const letters = ["R", "o", "h", "a", "n"];
let str_result = letters.toString();
console.log(str_result);
