const express = require('express');
const { logRequest } = require('./middleware');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(logRequest)

// using a dynamic html template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use(express.static('public'))
app.use(express.static('assets'))

app.get('/', (req, res) => {
    const data = {
        title: "Home Page",
        message: "Welcome to the Home Page!"
    };
    res.render('index', { data });
});
app.get('/about', (req, res) => {
    const data = {
        title: "About Page",
        message: "Welcome to the About Page!"
    };
    res.render('about', { data });
});

app.get('/hello', (req, res) => res.send('Hello World!'));

app.get('/users/:id', (req, res) => {
    const user = db.getUserById(req.params.id);
    if (!user) return next(new Error('User not found'));
    res.render('user', { user });
})

app.post('/submit-form', (req, res) => {
    const formData = req.body;
    console.log(formData);
    res.send('Form data received successfully!');
})

app.listen(3000, () => console.log("http://localhost:3000"));
