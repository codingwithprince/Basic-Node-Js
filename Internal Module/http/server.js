// require http

const http = require('http');
const port = '3000';
const hostname = '127.0.0.1'


// creating server

const server = http.createServer((req,res)=>{
    res.end("Hey i'm live !");
});

server.listen(port, hostname, ()=>{
    console.log(`Boss, Your server is Runnig at http://${hostname}:${3000}`);
});

