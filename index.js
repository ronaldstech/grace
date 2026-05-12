const express = require('express');

const app = express();

//middlewares implementation
app.set('view engine', 'ejs');
app.use(express.static('public'));

//route implementation
app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

app.get('/login', (req, res) => {
    res.render('login');
})

app.get('/user/profile', async (req, res) => {
    const response = await fetch("http://localhost:4000/api/products");
    const products = await response.json();
    //console.log(posts);
    res.render('profile', { products });
})


app.listen(5000, () => {
    console.log('server started');
});