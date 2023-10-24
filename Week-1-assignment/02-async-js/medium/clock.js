var time = "";

let min = 0;
let sec = 0;
let hr = 0;

setInterval(()=>{
    min = new Date().getMinutes()
    sec = new Date().getSeconds()
    hr = new Date().getHours()
    time = hr+":"+min+"::"+sec;
    console.log(time);
},1000)