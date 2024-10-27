
const express = require('express');
const app = express();
const userRouter = require('./routes/users_route')


app.get('/api/user', userRouter);

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.sendFile(__dirname + "/views/index.html")
})

app.get('/register', (req, res) => {

    res.statusCode = 200;
    res.sendFile(__dirname+"/views/register.html")

});

app.get('/login', (req, res) => {
    // res.cookie('name', 'imran nazir mim')
    // res.cookie('age', '22')
    res.clearCookie('name')
    res.clearCookie('age');
    res.append('id', '130000')
    res.end()
})

app.use((req, res) => {
    res.send('not found page 404 failed data')
})


module.exports = app

//http method: post = create, read = get, update = put, delete = delete;

