/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    let start_time = new Date().getTime();
    console.log(start_time);
    let temps = 0;
    for(let i=1;i<=n;++i){
        temps += i
    }
    console.log(new Date().getTime()-start_time)
}

calculateTime(100000)