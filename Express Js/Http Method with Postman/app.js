const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("I'm in Get")
});
app.post('/',(req,res)=>{
    res.send("I'm in post")
});
app.put('/',(req,res)=>{
    res.send("I'm in put")
});
app.delete('/',(req,res)=>{
    res.send("I'm in delete")
});

module.exports = app;