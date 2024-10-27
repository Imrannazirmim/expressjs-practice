const express = require('express');
const app = express();
const PORT = 4000;

//middleware use

const myMiddleWare = (req, res, next) => {
    console.log('middleware is running');
    req.currentTime = new Date(Date.now())
    next()
}

app.use(myMiddleWare);

// app.use((req, res, next) => {
//     res.send('someting wrong!')
// })

app.get('/', (req,res)=>{
    console.log('i am home' + req.currentTime)
    res.send('hi, i am home page')
})

app.get('/about', (req, res) => {
    console.log('i am about' + req.currentTime)
    res.send('hi, i am about page')
})



app.listen(PORT, ()=>{
    console.log(`server is running http://localhost:${PORT}`)
})