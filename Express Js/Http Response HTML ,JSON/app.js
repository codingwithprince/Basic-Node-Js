const express = require('express');
const app = express();
const userRouter = require('./Routes/user.route');


app.use(userRouter);

// app.use('/register', (req,res)=>{
//     res.send("i am register page");
// });

// adding Json file to interface
app.get('/', (req,res)=>{
    res.statusCode = 200;
    res.sendFile(__dirname+'/pages/index.html');
});

app.use('/register', (req,res)=>{
        // res.status(200).json({
       //     "name" : "Prince ahmed",
      //     "age" : "20 Years old"
     // });
    // res.redirect('login');
    
    //  adding a HTML file using sendFile
    res.statusCode = 200;
    res.sendFile(__dirname+'/pages/register.html');
    // res.cookie('id' , 'password');
    // res.cookie('id2' , 'password2');
 
    res.clearCookie('id2');
    res.append('id', '130000');
    
});

app.use((req,res)=>{
    res.send("404 ! Try another link :/")
});


module.exports = app;