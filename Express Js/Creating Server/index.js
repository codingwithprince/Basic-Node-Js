const app = require('./app');
const port = 3000;

app.listen(port, ()=>{
    console.log(`SERVER IS RUNNING AT http://localhost:${port}`);
});