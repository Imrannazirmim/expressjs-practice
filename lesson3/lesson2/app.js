
const express = require('express');
const app = express();
const port = 4000;


app.get('/products/:id([0-9]{3})', (req,res)=>{
    res.send(`<h2>ID = ${req.params.id}</h2>`)
})

app.use('*', (req, res)=>{
    res.status(404).send({
        message: 'not a valid router and value'
    })
})


app.listen(port, ()=> {
    console.log(`server is running http://localhost:4000`)
})