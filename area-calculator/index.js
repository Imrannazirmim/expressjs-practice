const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html")
});


app.get('/circle', (req,res)=>{
    res.sendFile(__dirname + "/circle.html")
})

app.get('/triangle', (req, res) => {
    res.sendFile(__dirname + "/triangle.html")
})

//body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

//triangle data
app.post('/triangle', (req,res)=>{
    const height = req.body.height;
    const base = req.body.base;

    const area = 0.5 * base * height;
    res.send(`<h2>Area of Triangle is: ${area}</h2>`)
});

app.post('/circle', (req, res)=>{
    const radius = req.body.radius;
    const areaCal = Math.PI * radius * radius;
    res.send(`<h2>Area of Circle is: ${areaCal}</h2>`)

})

app.listen(port, ()=>{
    console.log(`server is running http://localhost:${port}`)
})