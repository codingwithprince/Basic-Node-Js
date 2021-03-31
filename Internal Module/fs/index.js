// require fs module
const fs = require('fs');

// Write file module

fs.writeFile('demo.txt', 'lekha hoise !', (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("successfully written")
    }
});

// appended module

fs.appendFile('demo.txt', ' ayta extra add hoise !', (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("successfully updated text")
    }
});

// read file module

fs.readFile('demo.txt', 'utf-8', (err,data)=>{
   if(err){
       console.log(err);
   } else{
       console.log(data);
   }
});

// rename module

// fs.rename('demo.txt', 'demo2.txt', (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Renamed")
//     }
// });

// exist module

fs.exists('demo.txt', (result)=>{
    if(result){
        console.log("found");
    }else{
        console.log("Not found")
    }
});

// Unlink/Delete module

// fs.unlink('demo.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("File Deleted");
//     }
// })