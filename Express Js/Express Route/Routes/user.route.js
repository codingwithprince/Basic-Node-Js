const express = require('express');
const route = express.Router();

route.get('/', (req,res)=>{
    res.send("I am in HOME page");
});
route.get('/about', (req,res)=>{
    res.send("I am in ABOUT page")
});
route.get('/contact', (req,res)=>{
    res.send("I am in contactpage");
});
route.get('/services', (req,res)=>{
    res.send("I am in services page")
});


module.exports = route;