// require http

const http = require('http');
const port = '3000';
const hostname = '127.0.0.1'


// creating server

const server = http.createServer((req,res)=>{
    // res =====
    res.writeHead(222,{'Content-Type':'text/html'});
    res.write("<h1> hey I'm live, Belive it .</h1>");
    res.end();
});

server.listen(port, hostname, ()=>{
    console.log(`Boss, Your server is Runnig at http://${hostname}:${3000}`);
});

