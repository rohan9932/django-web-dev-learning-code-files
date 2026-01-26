let str = "Rohan";
console.log(str[0]);

//concat()
let f_name = "Rohan";
let l_name = "Rahim";
let full_name = f_name.concat(" ", l_name); //creates new array
console.log(full_name); 

//includes()
console.log(full_name.includes("Rohan")); 

//indexOf()
console.log(full_name.indexOf("Rahim")); 
console.log(full_name.lastIndexOf("Rahim")); 

//startsWith()
console.log(full_name.startsWith("Rohan")); 
console.log(full_name.endsWith("Rahim"));

//match() -> pattern match
let txt = "rohanrahim024@gmail.com";
let res = txt.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
console.log(res[0]); 

//replace 
let text = "Hello World!";
console.log(text.replace("World!", "Bangladesh!")); //creates new array

//replaceAll()
let txt2 = "I am born in Bangladesh. I also now residing in Bangladesh.";
let result = txt2.replaceAll("Bangladesh", "BD");
console.log(result); 

//slice() -> like arrays
//split() -> separates arr
let names = full_name.split(" ");
console.log(names); 

//toUpperCase(), toLowerCase
let h = "Hello";
let hUpper = h.toUpperCase();
let hLower = h.toLocaleLowerCase();
console.log(hUpper + " " + hLower);  


//valueOf() -> parse str from object
let strObj = new String("Bangladesh");
console.log(strObj);
console.log(strObj.valueOf());