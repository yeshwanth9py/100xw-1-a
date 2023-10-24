const fs = require("fs");

fs.writeFile("3-read-from-file.md", "you are hacked", (err,data)=>{
    console.log(data);
})