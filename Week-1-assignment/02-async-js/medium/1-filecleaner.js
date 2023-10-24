const fs = require("fs");



var flag = true;
function modifytext(data){
    data.trim()
    let tempstr = ""
    for(let x of data){
        if ((x == " " && flag==true)){
            tempstr += x;
            flag = false
        }
        else if(x!==" "){
            flag = true
            tempstr += x;
        }
    }
    return tempstr;
}


fs.readFile("dummy_file.txt","utf-8",(err,data)=>{
    let tempstr = modifytext(data)

    //after reading file i must write file

    fs.writeFile("dummy_file.txt",tempstr,(err)=>{
        console.log("written")
    })
    
})