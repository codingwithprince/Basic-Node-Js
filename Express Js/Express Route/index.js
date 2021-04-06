const app = require('./app');
const port = 3000;
const hostname = '127.0.0.1';



app.listen(port , hostname, ()=>{
    console.log(`Your server is loading at http://${hostname}:${port}`);
});