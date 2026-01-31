console.log("Hello World!");

//browser gave use a tool by which we can make request..

// const users_el = document.querySelector(".users");
// // console.log(users_el);

// const fetchedData = fetch("https://jsonplaceholder.typicode.com/users");

// //we can insert data dynamically through dom manipulation
// //we will write down basic informations in the html and then add data dynamically through async await
// fetchedData
//     .then((response)=>response.json())
//     .then((data)=>{
//         data.forEach(element => {
//             users_el.innerHTML += `<li>${element.name}</li>`;
//         });
//     });

// with async await
async function main() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();

        const user_el = document.querySelector(".users");

        data.forEach(element => {
            user_el.innerHTML += `<li>${element.name}</li>`;
        });

        const responseTodo = await fetch("https://jsonplaceholder.typicode.com/todos");
        const dataTodo = await responseTodo.json();
        // console.log(dataTodo);

        const todo_el = document.querySelector(".todo");
        
        dataTodo.forEach(element => {
            todo_el.innerHTML += `<li>${element.title}</li>`;
        })
    } catch (error) {
        const container = document.querySelector(".container");
        container.innerHTML += `<h2>Sorry data not found!!`;
    }
}

main();