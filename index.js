const express = require('express');
const session = require('express-session');

const app = express();

//middlewares implementation
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(
    session({
        secret: '1234',
        resave: false,
        saveUninitialized: false,
        cookie: {
        maxAge: 1000 * 60 * 60 // 1 hour
        }
    })
);

//route implementation
app.get('/', (req, res) => {
    const user = {
        username: "grace",
        age: 20
    };
    req.session.username = user;
    res.send('session saved');
});

app.get('/login', (req, res) => {
    res.render('login');
})

app.get('/user/profile', async (req, res) => {
    const username = req.session.username;
    const response = await fetch("http://localhost:4000/api/products");
    const products = await response.json();
    //console.log(posts);
    res.render('profile', { products, username });
})


app.listen(5000, () => {
    console.log('server started');
});