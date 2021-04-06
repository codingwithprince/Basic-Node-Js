const express = require('express');
const app = express();
const userRoute = require('./Routes/user.route');


app.use(userRoute);

app.use((req,res)=>{
    res.send("404 ! Page Route is invalid");
});


module.exports = app;