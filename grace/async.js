/*async function fetchPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
}

fetchPosts();*/

const fs = require('fs/promises');

async function getData() {
    const response = await fs.readFile('data.txt', 'utf-8');

    console.log(response);
}

getData();