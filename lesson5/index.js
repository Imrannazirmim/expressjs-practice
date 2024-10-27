const express = require('express');
const app = express();
const PORT = 3000;

//static middleware use
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})


app.listen(PORT, () => {
    console.log(`server is running http://localhost:${PORT}`)
})