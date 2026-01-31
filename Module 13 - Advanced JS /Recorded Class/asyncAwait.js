// function getData() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log(`Hello World`);
//         }, 2000);
//     })
// }


// console.log(`Loading Modules...`);

// console.log(`Do something else...`);

// console.log(`Loading data......`);

// let data = getData();
//generally as it is a promise obj the bottom script will be executed and data will be executed when finished timeout

//But suppose we wanna postpone the bottom clog till the data isn't processed. in this case we'll use async await

//one way to do this is was with .then() in promise 

// data.then((param)=>{
//     console.log(data);
//     console.log(`Process data.....`);
// });

// A promise finishes only when:
// resolve() is called, OR
// reject() is called


//but async await was introduced to lessen the hassle of .then() and it's callback usage

// async function getData() { // to run in background as it's taking time
//     //simulate getting data from a server
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(`Hello World`);
//         }, 5000);
//     })
// }

async function getData() { // to run in background as it's taking time
    //we need 2 awaits in fetch as 2 promise happens here
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1'); //for fetching data
    let data = await x.json(); //for parsing the fetched data 
    console.log(data);
    return 25;
}
  
async function main() {
    console.log(`Loading Modules...`);
 
    console.log(`Do something else...`);

    console.log(`Loading data......`);

    let data = await getData(); //for waiting for the function to execute
    //await waits until the promise settles

    console.log(data);
    console.log(`Process data.....`); 
}

main(); //await usually works on a async func so we created main 

//async await usage is better than using .then()