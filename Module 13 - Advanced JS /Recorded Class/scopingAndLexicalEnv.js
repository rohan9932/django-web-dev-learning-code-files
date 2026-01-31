//scoping works same like other programming languages -> Global, Functional, Block
//but in js if var is used -> it works as global regardless in any block(except function) it's declared

var age = 5;

if (age <= 5) {
    var greetMessage = "Hello..";
    console.log(greetMessage);
}

console.log(greetMessage);

//lexical scoping -> required data for an inner function (of a outer functions)