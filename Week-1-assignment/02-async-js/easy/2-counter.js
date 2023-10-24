var counter = 0;

function timer(){
    setTimeout(()=>{
        counter++;
        console.log(counter);
        timer()
    },1000)
}
timer()