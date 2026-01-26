let now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth()); //starts from 0 

let setDate = new Date();
setDate.setDate(15);
setDate.setMonth(5);
setDate.setFullYear(2004);
console.log(setDate);

console.log(now.getTime()); //time in ms from 1970 

let bdTime = now.toLocaleString("en-BD");
console.log(bdTime);

//random()
let res = Math.floor(Math.random() * 100) + 1;
console.log(res);

//Math.PI, Math.random(), Math.ceil(), Math.floor, Math.sqrt(),