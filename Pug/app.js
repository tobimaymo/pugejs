const express = require('express');
const app = express();
const server = app.listen(8080, () => console.log('Server Up'));

app.set('views', './view');
app.set('view engine', 'pug');
app.use(express.json())
app.use(express.urlencoded({extended: true}))

let users = [
    {
        title: "Midnights",
        price: 30,
        thumbnail: "https://jenesaispop.com/wp-content/uploads/2022/08/taylorswift-midnights-696x743.jpg",
        autor: "Taylor Swift"
    }
];

app.get('/', (req, res) => {
    res.render('home', {
        albums: users
    })
})

app.get('/productos', (req, res) => {
    res.render('users', {
        users
    })
})

app.post('/users', (req, res) => {
    users.push(req.body)
    res.redirect('/')
})
app.post('/home', (req, res) => {
    res.redirect('/productos')
})