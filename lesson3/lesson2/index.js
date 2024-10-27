
// const express = require('express');
// const bodyPerser = require('body-parser')
// const app = express();
// const port = 8000;

//query parameters

// app.get('/', (req, res)=>{
//     const {id, name, age} = req.query;
//     res.send(`<h1>Student id = ${id}, name = ${name}, age: ${age}</h1>`)
// })

//route params

// app.get('/userId/:id/userAge/:age', (req,res) => {
//     const {id, age} = req.params;
    
//     res.send(`<h1>Student id is ${id}, age: ${age}</h1>`)
    
// })

// app.get('/', (req, res) =>{
//     const id = req.header('id');
//     const name = req.header('name')
//     res.send(`<h1>Student id is = ${id}, name: ${name}</h1>`)
// })


//post method 
//post data json file but body parser using
// app.use(bodyPerser.urlencoded({extended: false}));
// app.use(bodyPerser.json())

// app.post('/user', (req,res)=>{
//     const {id, name, age} = req.body;
//     res.send(`welcome id: ${id}, name: ${name}, age: ${age}`)
// })

//form data 

// app.get('/register', (req,res)=>{
//     res.sendFile(__dirname + "/index.html")
// });
// app.post('/register', (req,res)=>{
//     const fullName = req.body.fullName;
//     const age = req.body.age
//     res.send(`<h2>Your name is ${fullName}, age: ${age}</h2>`)
// })

// app.listen(port, ()=>{
//     console.log(`server is running http://localhost:${port}`)
// })

