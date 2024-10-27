
const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('i am get data home page')
});

router.get('/register', (req,res)=>{
    res.send('l am register page')
});

router.get('/login', (req,res)=>{
    res.send('i am a login page')
});

module.exports = router;