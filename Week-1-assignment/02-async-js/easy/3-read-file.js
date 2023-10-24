const fs = require("fs");
fs.readFile("2-counter.md","utf-8",(err,data)=>{
    console.log(data);
})

for(var i=0;i<100;i++){
    console.log(i);
}