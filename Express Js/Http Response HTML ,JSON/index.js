const app = require('./app');
const port = 3000;


app.listen(port , ()=>{
    console.log(`Server is Runnig at http://localhost:${port}`);
});