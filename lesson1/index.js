
//express learning
const app = require('./app')
const port = 8000;

app.listen(port, ()=>{
    console.log(`server is running http://localhost:${port}`)
})