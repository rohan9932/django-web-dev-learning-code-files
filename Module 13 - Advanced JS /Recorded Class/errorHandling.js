let a = prompt("Enter a number: ");
let b = prompt("Enter second number: ");

let sum = parseInt(a) + parseInt(b);

if(isNaN(a) || isNaN(b)) {
    throw new SyntaxError("You should enter a numeber in input!");
}

function main() {
    try {
        alert(`The total sum is: ${sum*y}.`);
        return true;
    } catch (error) {
        alert(error);
        return false;
    } finally {
        console.log('Files are being closed and db connection secured.....');
    }
     //finally will be executed anyways. so it's useful in functions as otherwise the bottom code wouldn't be executed as we are returning values from function
}

let c = main();
console.log(c);