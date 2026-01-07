const path = require('path');
const fs = require('fs');

fs.readFile(path.join(__dirname,'files','starter.txt'),'utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data)
})
console.log(path.join(__dirname,'files','starter.txt'))